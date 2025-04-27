import Image from "next/image";
import { BackgroundBoxesDemo } from "./BackgroundBoxes";
import { Footer } from "../components/Footer";

export default function Details() {
  return (
    <main className="h-auto bg-slate-50" id="top">
      <BackgroundBoxesDemo />
      <section>
        <article className="relative mx-auto my-16 h-[200px] w-[90%] overflow-hidden rounded-xl bg-red-300 md:h-[300px] md:w-[60%]">
          <Image
            src="/Course/Card1.png"
            fill
            style={{ objectFit: "cover" }}
            alt="video"
          />
        </article>
        <article className="mx-auto w-[90%] bg-[#fff] p-4 text-justify md:w-[60%]">
          Greetings form Redsan! We are thrilled to invite students and aspiring
          entrepreneurs to the much-awaited Internship & Training Mahakumbh in
          2025, an exclusive industry-focused program designed to equip
          participants with the skills needed in today's competitive world.
          <br />
          <br />
          <strong>What is Internship & Training Mahkumbh 2025?</strong>
          <br />A dynamic online internship experience conducted between June 02
          - July 18, 2025. Led by industry experts and startup founders. Focused
          on practical skill building, live projects, and certifications.
          <br />
          <br />
          <strong>Why Participate?</strong>
          <li>
            Industry Exposure - Learn from real-world startup founders featured
            in SharkTank an Startup Mahakumbh.
          </li>
          <li>
            Skill Development - Hands-on training on Notion, LinkedIn, Digital
            Marketing, Branding & Packaging.
          </li>
          <li>
            Live Projects & Certification - Get certified and gain practical
            experience for your resume.
          </li>
          <li>
            Startup Support - 90-day mentoring and guidance for building
            entrepreneur.
          </li>
          <li>
            Exclusive Rewards - Free giveaways from brands like Domino's
            Starkbucks, and 300+ others.
          </li>
          <br />
          <br />
          <strong> Our Collaborators & Ecosystem:</strong>
          <br /> Our initiative is powered by EDC India, offering exclusive
          career development, mentorship, and startup building opportunities.
          <br /> Institutions and students will gain access to a thriving
          professional network, internship/job listings, startup resources, and
          community events.
        </article>
        <article className="mx-auto w-[90%] md:w-[60%]">
          <div className="bg-[#fff] px-6 py-16 md:px-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Internship for Learning and Applying the Skill Sets
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">
                  1. Notion
                </h3>
                <p className="mt-2 text-gray-700">
                  Notion is a powerful productivity tool that allows individuals
                  and teams to organize their work efficiently. It combines
                  note-taking, database management, and project planning into
                  one versatile platform.
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                  <li>
                    <strong>Learning what is Notion and basic tools:</strong>
                    Understanding Notion&apos;s core functionality, including
                    databases, pages, and integrations.
                  </li>
                  <li>
                    <strong>
                      How to create a client&apos;s worksheet and create content
                      with Notion AI:
                    </strong>
                    Learn how to structure client-related data and generate
                    AI-assisted content efficiently.
                  </li>
                  <li>
                    <strong>
                      What is a workspace and how to create your team&apos;s
                      workspace:
                    </strong>
                    Explore the concept of workspaces, their advantages, and how
                    to set up collaborative environments for teams.
                  </li>
                  <li>
                    <strong>
                      Worksheet templates and Automate scheduling meetings:
                    </strong>
                    Utilize templates to streamline workflow and integrate
                    scheduling tools for seamless meeting management.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">
                  2. Branding Businesses
                </h3>
                <p className="mt-2 text-gray-700">
                  Branding is essential for business success, ensuring that a
                  company&apos;s identity stands out and resonates with the
                  right audience.
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                  <li>
                    <strong>
                      Learning the 4Ps of Marketing and POEM framework:
                    </strong>
                    Understanding Product, Price, Place, and Promotion, along
                    with the Paid, Owned, and Earned Media (POEM) framework.
                  </li>
                  <li>
                    <strong>
                      How to position your brand to the right people:
                    </strong>
                    Strategies to identify and engage target audiences
                    effectively.
                  </li>
                  <li>
                    <strong>
                      What is a LOGO, Color scheme, and creating a face of your
                      brand:
                    </strong>
                    The significance of visual branding and how to design
                    elements that represent your brand.
                  </li>
                  <li>
                    <strong>
                      What is Omnichannel marketing to build your brand:
                    </strong>
                    Leveraging multiple platforms to create a cohesive brand
                    presence and customer experience.
                  </li>
                  <li>
                    <strong>Importance of design thinking and packaging</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">
                  3. Digital Marketing
                </h3>
                <p className="mt-2 text-gray-700">
                  Digital marketing encompasses various strategies to promote
                  brands and businesses online, driving visibility and
                  engagement.
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                  <li>
                    <strong>SEO and content writing:</strong> Mastering search
                    engine optimization and crafting compelling content to rank
                    higher on search results.
                  </li>
                  <li>
                    <strong>Email marketing:</strong> Strategies for creating
                    effective email campaigns to nurture leads and retain
                    customers.
                  </li>
                  <li>
                    <strong>WhatsApp marketing:</strong> Utilizing WhatsApp for
                    direct customer engagement and marketing automation.
                  </li>
                  <li>
                    <strong>
                      Ads (What is a campaign and how to draft an Ad):
                    </strong>
                    Understanding advertising campaigns and how to structure
                    compelling ad copies.
                  </li>
                  <li>
                    <strong>
                      Social media marketing and creating content templates:
                    </strong>
                    Developing social media strategies and designing reusable
                    content templates for consistent branding.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">
                  4.LinkedIn
                </h3>
                <p className="mt-2 text-gray-700">
                  LinkedIn is a professional networking platform that offers
                  immense opportunities for personal branding, business growth,
                  and lead generation.
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                  <li>
                    <strong>How to set up your profile and optimize:</strong>
                    Best practices for creating a strong LinkedIn profile that
                    stands out.
                  </li>
                  <li>
                    <strong>
                      How to create content: text, image, and video format:
                    </strong>
                    Learning to craft engaging posts in various formats to boost
                    visibility.
                  </li>
                  <li>
                    <strong>How to build a network and find leads:</strong>
                    Strategies for growing connections and identifying potential
                    clients or business partners.
                  </li>
                  <li>
                    <strong>
                      How to create your business page and hire people:
                    </strong>
                    Setting up a LinkedIn business page and using LinkedIn for
                    talent acquisition.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <article className="mx-auto w-[90%] md:w-[60%]">
          <section className="bg-[#fff] px-6 py-12 md:px-20">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-4xl font-bold text-gray-800">
                EDC Community Benefits & Services
              </h2>
              <p className="mb-6 text-gray-600">
                Welcome to India&apos;s first-of-its-kind platform where
                students, startups, and professionals co-exist and thrive.
              </p>
              <p className="mb-4 text-xl font-semibold text-red-500">
                EDC COMMUNITY – Be the Pluto!
              </p>
              <p className="mb-8 text-gray-700">
                A one-stop destination designed to empower and connect ambitious
                individuals and visionary entrepreneurs. At EDC, we believe in
                creating real opportunities through collaboration, learning, and
                support.
              </p>

              <div className="mb-12">
                <h3 className="mb-2 text-2xl font-bold text-blue-700">
                  Student Membership Benefits
                </h3>
                <p className="mb-4 text-gray-700">
                  The EDC Community is your launchpad to an exciting and
                  successful future. As a student member, you gain access to an
                  ecosystem full of opportunities, mentors, and experiences to
                  accelerate your career and personal growth.
                </p>
                <ul className="list-inside list-disc space-y-4 text-gray-700">
                  <li>
                    <strong>Jobs & Internships</strong>
                    <br />
                    Discover and apply to daily-updated job and internship
                    opportunities from both MNCs and startups within the EDC
                    network.
                  </li>
                  <li>
                    <strong>On-Demand Courses</strong>
                    <br />
                    Access 50+ free industry-curated courses in coding, design,
                    marketing, finance, and more.
                  </li>
                  <li>
                    <strong>750+ Domain-Specific Mentors</strong>
                    <br />
                    Connect with mentors for academics, career development,
                    personal growth, and startup building.
                  </li>
                  <li>
                    <strong>Clubs & Communities</strong>
                    <br />
                    Join clubs in singing, dancing, poetry, coding, design, and
                    more.
                  </li>
                  <li>
                    <strong>Government Job Opportunities</strong>
                    <br />
                    Get updates and tips for government exams and bank
                    apprenticeships.
                  </li>
                  <li>
                    <strong>Global Job Access</strong>
                    <br />
                    Apply for international caregiver jobs with application
                    guidance.
                  </li>
                  <li>
                    <strong>Free Movie Tickets</strong> <br />
                    Enjoy 3 complimentary tickets annually for trending films.
                  </li>
                  <li>
                    <strong>IPL Corporate Box Tickets</strong>
                    <br />
                    Top 100 active members win premium IPL box tickets.
                  </li>
                  <li>
                    <strong>Weekly Club Meetups</strong>
                    <br />
                    Attend meetups to bond and engage with community peers.
                  </li>
                  <li>
                    <strong>Youth Fest Access</strong>
                    <br />
                    Enjoy free access to competitions, cultural events, and
                    networking.
                  </li>
                  <li>
                    <strong>Workshop & Event Updates</strong>
                    <br />
                    Get real-time updates and free access to EDC-hosted
                    programs.
                  </li>
                  <li>
                    <strong>Degree+ Certification Program</strong>
                    <br />
                    Take modules, attempt quizzes, and earn certificates.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="mb-2 text-2xl font-bold text-green-700">
                  Startup Membership Benefits
                </h3>
                <p className="mb-4 text-gray-700">
                  Startup members enjoy all student membership benefits, plus
                  exclusive tools, connections, and support tailored for
                  entrepreneurs.
                </p>
                <ul className="list-inside list-disc space-y-4 text-gray-700">
                  <li>
                    <strong>Pitch Deck & Business Support</strong>
                    <br />
                    Help with pitch decks, finance models, and startup
                    documents.
                  </li>
                  <li>
                    <strong>Startup Mentorship</strong>
                    <br />
                    Access mentors across tech, finance, marketing, design, and
                    legal.
                  </li>
                  <li>
                    <strong>Government Grant Updates</strong>
                    <br />
                    Stay informed about grants, subsidies, and schemes in
                    emerging sectors.
                  </li>
                  <li>
                    <strong>Startup Events & Investor Pitching</strong>
                    <br />
                    Pitch to investors and learn from veteran founders.
                  </li>
                  <li>
                    <strong>Talent Hiring</strong>
                    <br />
                    Post roles and connect with student and professional talent.
                  </li>
                  <li>
                    <strong>Startup Legal Support</strong>
                    <br />
                    Access legal support for registration, compliance, and
                    disputes.
                  </li>
                  <li>
                    <strong>IPR & Innovation Support</strong>
                    <br />
                    Protect your ideas with help for patents, trademarks, and
                    copyrights.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="mb-2 text-2xl font-bold text-purple-700">
                  Mentor Membership Benefits
                </h3>
                <p className="mb-4 text-gray-700">
                  Mentors are the backbone of the EDC ecosystem, gaining brand
                  value and access to meaningful opportunities.
                </p>
                <ul className="list-inside list-disc space-y-4 text-gray-700">
                  <li>
                    <strong>Startup Connect</strong>
                    <br />
                    Collaborate and consult with 1000+ startups.
                  </li>
                  <li>
                    <strong>Guest Lecture Opportunities</strong>
                    <br />
                    Speak at youth fests, bootcamps, and academic sessions.
                  </li>
                  <li>
                    <strong>Recognition & Awards</strong>
                    <br />
                    Get acknowledged through certificates and public
                    recognition.
                  </li>
                  <li>
                    <strong>Personal Brand Building</strong>
                    <br />
                    Grow your presence via events, community activities, and
                    media.
                  </li>
                </ul>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  Why Join EDC Community?
                </h3>
                <p className="mt-2 text-gray-600">
                  Whether you&apos;re a student, a startup founder, or a mentor
                  — EDC Community is where you grow, connect, and shine.
                  <span className="font-medium italic">
                    Be the Pluto — stand out, stay unique, and keep evolving.
                  </span>
                </p>
              </div>
            </div>
          </section>
        </article>
        <article className="mx-auto w-[60%]"></article>
      </section>
      <Footer />
    </main>
  );
}
