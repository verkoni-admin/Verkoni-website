import { motion } from "framer-motion";
import { fadeUp } from "../../Home/animations";
import { teamHierarchy } from "../data/aboutContent";

const sizeStyles = {
  lg: {
    card: "max-w-4xl w-full rounded-3xl",
    image: "min-h-[340px] sm:min-h-[400px] md:min-h-[460px]",
    roleClass: "text-xs md:text-sm tracking-[0.2em]",
    nameClass: "text-xl md:text-3xl",
    bio: "text-sm md:text-base",
    overlayPad: "p-5 md:p-8",
    bodyPad: "p-5 md:p-8",
    initials: "text-6xl md:text-7xl",
  },
  md: {
    card: "w-full max-w-[380px] rounded-2xl",
    image: "min-h-[300px] sm:min-h-[340px]",
    roleClass: "text-[10px] md:text-xs tracking-[0.18em]",
    nameClass: "text-lg md:text-2xl",
    bio: "text-sm",
    overlayPad: "p-4 md:p-5",
    bodyPad: "p-4 md:p-5",
    initials: "text-5xl",
  },
  sm: {
    card: "w-full max-w-[300px] rounded-xl",
    wideCard: "w-full max-w-[400px] sm:max-w-[440px] md:max-w-[500px] rounded-xl",
    image: "min-h-[260px] sm:min-h-[280px]",
    wideImage: "min-h-[240px] sm:min-h-[280px] aspect-[16/10] sm:aspect-[2/1]",
    roleClass: "text-[10px] tracking-[0.15em]",
    nameClass: "text-base md:text-xl",
    bio: "text-xs md:text-sm",
    overlayPad: "p-3.5 md:p-4",
    bodyPad: "p-3.5 md:p-4",
    initials: "text-4xl",
  },
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TreeConnector({ width = "max-w-3xl", branchInset = "15%" }) {
  return (
    <div className={`relative w-full ${width} mx-auto`}>
      <div className="flex justify-center">
        <div className="w-px h-8 md:h-10 bg-gradient-to-b from-cyan-500/30 to-white/15" />
      </div>
      <div className="relative h-6 md:h-8">
        <div
          className="absolute top-0 h-px bg-white/10"
          style={{ left: branchInset, right: branchInset }}
        />
      </div>
    </div>
  );
}

function ImageOverlay({ role, personName, isTeam, tierStyles, align = "left" }) {
  const { roleClass, nameClass, overlayPad } = tierStyles;
  const positionClass = align === "right" ? "right-0 items-end text-right" : "left-0 items-start text-left";

  return (
    <div
      className={`absolute bottom-0 z-10 flex flex-col max-w-sm ${positionClass} ${overlayPad}`}
    >
      <p className={`text-cyan-300/90 uppercase ${roleClass}`}>{role}</p>
      {!isTeam ? (
        <h3 className={`text-white font-medium drop-shadow-lg ${nameClass}`}>
          {personName}
        </h3>
      ) : null}
    </div>
  );
}

function MemberLinks({ linkedin, email }) {
  if (!linkedin && !email) return null;

  return (
    <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-white/10">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-xs hover:text-cyan-300/90 transition-colors"
        >
          LinkedIn
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-white/50 text-xs hover:text-cyan-300/90 transition-colors"
        >
          Email
        </a>
      )}
    </div>
  );
}

function MemberCard({ member, size = "md", index = 0 }) {
  const memberTier = sizeStyles[size];
  const hasImage = Boolean(member.image);
  const isWide = Boolean(member.wide);
  const cardClass = isWide && memberTier.wideCard ? memberTier.wideCard : memberTier.card;
  const imageClass = isWide && memberTier.wideImage ? memberTier.wideImage : memberTier.image;
  const imagePosition = isWide ? "object-middle" : "object-top";

  return (
    <motion.article
      variants={fadeUp}
      custom={0.1 + index * 0.06}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`group border border-white/10 bg-[#0a1218] overflow-hidden hover:border-cyan-500/30 transition-colors duration-500 p-0 ${cardClass}`}
    >
      <div className={`relative w-full ${imageClass}`}>
        {hasImage ? (
          <img
            src={member.image}
            alt={member.isTeam ? member.role : member.name}
            className={`absolute inset-0 h-full w-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500 ${imagePosition}`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/15 to-black">
            <span className={`text-white/20 font-extralight tracking-widest ${memberTier.initials}`}>
              {member.isTeam ? "VM" : getInitials(member.name)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
        <ImageOverlay
          role={member.role}
          personName={member.name}
          isTeam={member.isTeam}
          tierStyles={memberTier}
          align="left"
        />
        {isWide && member.nameRight && (
          <ImageOverlay
            role=""
            personName={member.nameRight}
            isTeam={false}
            tierStyles={memberTier}
            align="right"
          />
        )}
      </div>

      <div className={`bg-black/80 ${memberTier.bodyPad}`}>
        <p className={`text-white/55 leading-relaxed ${memberTier.bio}`}>{member.bio}</p>
        <MemberLinks linkedin={member.linkedin} email={member.email} />
      </div>
    </motion.article>
  );
}

function FoundersCard({ founders, index = 0 }) {
  const founderTier = sizeStyles.lg;
  const [left, right] = founders.members;

  return (
    <motion.article
      variants={fadeUp}
      custom={0.1 + index * 0.06}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`group border border-white/15 bg-[#0a1218] overflow-hidden hover:border-cyan-500/35 transition-colors duration-500 p-0 ${founderTier.card}`}
    >
      <div className={`relative w-full ${founderTier.image}`}>
        {founders.image ? (
          <img
            src={founders.image}
            alt="Verkoni founders"
            className="absolute inset-0 h-full w-full object-cover object-[center_5%] opacity-95 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

        <div className={`absolute top-0 left-0 z-10 ${founderTier.overlayPad}`}>
          <p className={`text-cyan-300/90 uppercase ${founderTier.roleClass}`}>{founders.title}</p>
        </div>

        {left && (
          <ImageOverlay
            role={left.role}
            personName={left.name}
            tierStyles={founderTier}
            align="left"
          />
        )}
        {right && (
          <ImageOverlay
            role={right.role}
            personName={right.name}
            tierStyles={founderTier}
            align="right"
          />
        )}
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black/80 ${founderTier.bodyPad}`}>
        {founders.members.map((member) => (
          <div key={member.id}>
            <p className={`text-white/55 leading-relaxed ${founderTier.bio}`}>{member.bio}</p>
            <MemberLinks linkedin={member.linkedin} email={member.email} />
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const { founders, strategists, contributors } = teamHierarchy;

  return (
    <section
      id="team"
      className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/30 uppercase tracking-[0.3em] text-sm block mb-8"
        >
          The team
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white text-3xl md:text-5xl font-extralight tracking-[-0.03em] leading-[1.1] max-w-3xl mb-6"
        >
          The people behind Verkoni.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-white/50 text-lg leading-relaxed max-w-2xl mb-16 md:mb-20"
        >
          Engineers, builders, and strategists united by a shared mission to
          ship technology that makes businesses faster and smarter.
        </motion.p>

        <div className="flex flex-col items-center">
          <FoundersCard founders={founders} />

          <TreeConnector width="max-w-xl md:max-w-2xl" branchInset="18%" />

          <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-6 md:gap-10 lg:gap-16 w-full">
            {contributors.map((member, i) => (
              <div
                key={member.id}
                className={
                  member.wide
                    ? "flex flex-col items-center w-full sm:w-auto sm:flex-1 sm:max-w-xl"
                    : "flex flex-col items-center w-full sm:w-auto sm:flex-1 sm:max-w-xs"
                }
              >
                <div className="hidden sm:block w-px min-h-[20px] max-h-[28px] bg-white/10" />
                <MemberCard member={member} size="sm" index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}