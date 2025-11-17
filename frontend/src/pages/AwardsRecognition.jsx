// pages/AwardsRecognition.jsx
import React from "react";
import AwardsHero from "../components/AwardHero";
import AwardHighlight from "../components/AwardHighlight";
import AwardGrid from "../components/AwardGrid";
import AwardLongCard from "../components/AwardLongCard";
import AwardVideoCard from "../components/AwardVideoCard";

// logos you provided
const logos = [
  "https://technoglobe.co.in/awards/award-2025.webp",
  "https://technoglobe.co.in/awards/award-2025.webp",
  "https://technoglobe.co.in/awards/Logo-1.webp",
  "https://technoglobe.co.in/awards/Logo-3.webp",
  "https://technoglobe.co.in/awards/Logo-4.webp",
  "https://technoglobe.co.in/awards/Logo-5.webp",
  "https://technoglobe.co.in/awards/Logo-6.webp",
  "https://technoglobe.co.in/awards/Logo-6.webp",
  "https://technoglobe.co.in/awards/Logo-8.webp",
  "https://technoglobe.co.in/awards/Logo-9.webp",
  "https://technoglobe.co.in/awards/Logo-10.webp",
  "https://technoglobe.co.in/awards/tg-oxford.webp",
];

const videos = [
  {
    src: "https://technoglobe.co.in/video/vidhya.mp4?v1",
    title: "Vidhya",
    desc: "",
  },
  {
    src: "https://technoglobe.co.in/video/arjun.mp4?v1",
    title: "Arjun",
    desc: "",
  },
  {
    src: "https://technoglobe.co.in/video/kiku.mp4?v1",
    title: "Kiku",
    desc: "",
  },
  {
    src: "https://technoglobe.co.in/video/delnaz.mp4?v1",
    title: "Delnaz",
    desc: "",
  },
];

export default function AwardsRecognition() {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-[#040405] to-[#07101a] text-white">
      <div className="pt-20">
        <AwardsHero
          title="Awards & Recognition"
          subtitle="Technoglobe’s national and international recognitions celebrating excellence in training, entrepreneurship and social impact."
        />

        {/* Highlight big award (floating text) */}
        <AwardHighlight
          image="https://technoglobe.co.in/awards/award-2025.webp"
          headline="AWARDED FOR — BEST FRANCHISE MODEL"
          subheadline="Best Franchise Model — Recognition by Deputy Chief Minister of Rajasthan"
          description={`Technoglobe’s franchise model received national recognition when it was awarded for the Best Franchise Model by the Deputy Chief Minister of Rajasthan, Mr. Prem Chand Bairwa, in the presence of Celebrity Actor Mr. Suniel Shetty. Dr. Shiraz Khan was also recognized among the Best Visionary Leaders of Rajasthan by My FM.`}
        />

        {/* Awards grid */}
        <AwardGrid logos={logos} />

        {/* Long card for Oxford & notable award writeup */}
        <AwardLongCard
          image="https://technoglobe.co.in/awards/tg-oxford.webp"
          title="Award at Oxford University Townhall"
          body={`One of our most notable awards was presented at the Townhall of Oxford University by the Mayor of Oxford, in the presence of senior officials and vice-chancellors from esteemed universities worldwide. Technoglobe is proud to be the only organization to have received this award in our category.`}
        />

        {/* Recognitions list + print/electronic media */}
        <section className="container-max my-8">
          <div className="rounded-2xl p-6 border border-border/40 bg-card shadow-sm">
            <h4 className="text-lg font-bold text-foreground mb-3">
              Recognitions & Endorsements
            </h4>
            <p className="text-muted-foreground mb-4">
              Technoglobe has been recognized by national and international
              organizations and covered extensively in print and electronic
              media.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-2">
                  Presented by
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1 list-inside">
                  <li>Mr. Om Birla, Speaker of the Lok Sabha</li>
                  <li>
                    Dr. Shashi Tharoor, Ex-Foreign Minister, Government of India
                  </li>
                  <li>Dr. Najma Hephthullah, Minister of Minorities</li>
                  <li>Mr. Jackie Shroff, Bollywood Actor</li>
                  <li>Mr. Shekhar Suman, Bollywood Actor</li>
                  <li>Mr. Parsadi Lal Meena, Industry Minister, Rajasthan</li>
                  <li>Mr. Anand Kumar, Founder Super 30</li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-foreground mb-2">
                  Media Coverage
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    Featured in Dainik Bhaskar, Rajasthan Patrika, Punjab Kesari
                    & other leading newspapers
                  </li>
                  <li>TV commercial aired on Aaj Tak</li>
                  <li>
                    Success story featured on My FM program "Kahani Jazbe Ki"
                  </li>
                  <li>Podcast & ABP coverage for skilling initiatives</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <strong>Presence:</strong> Recognized by Government of India; 100+
              locations across India; expanding to Canada, UK & UAE. Goal: 150+
              centers by year end.
            </div>
          </div>
        </section>

        {/* Video gallery */}
        <section className="container-max my-8">
          <h4 className="text-xl font-bold mb-4 invert">Video Highlights</h4>

          <div className="flex gap-8 justify-center overflow-x-auto pb-4 no-scrollbar">
            {videos.map((v, idx) => (
              <AwardVideoCard
                key={idx}
                src={v.src}
                title={v.title}
                description={v.desc}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-max my-10 text-center">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Join us and take the next step toward your Professional Success!
            </h3>
            <p className="text-muted-foreground mb-4">
              Our courses are designed by industry experts, include AI-powered
              learning tools, and result in globally recognized certifications.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="/courses"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:scale-[1.02] transition"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border/40 text-primary font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
