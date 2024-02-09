"use client";
import {
  Button,
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AvatarImageText from "./AvatarImageText";
import AvatarStack from "./AvatarStack";

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = Array.from(
        document.querySelectorAll("[data-section]")
      ).map((section) => ({
        id: section.id,
        offset: section.offsetTop,
        height: section.offsetHeight,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const { id, offset, height } of sectionOffsets) {
        if (scrollPosition >= offset && scrollPosition < offset + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="flex flex-row gap-8">
        <div className="w-3/4">
          <div id="section1" data-section className="bg-white">
            <div className="flex flex-col items-center gap-8">
              <img
                src="/images/event1.jpg"
                className=" h-96 w-full rounded-2xl"
                alt="image"
              />
              <div className="w-4/5">
                <Typography variant="h3" className="text-center">
                  CodeCrafters Presents DevSprint 2024 : Inter university
                  Software Development Competition
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
                </svg>

                <Typography variant="small">
                  By IEEE BUET Student Branch
                </Typography>
              </div>
              <div className="flex flex-row gap-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5.75a.75.75 0 0 1 0 1.5H8.5v4.275c0 .296.144.455.26.499a3.5 3.5 0 0 0 4.402-1.77h-.412a.75.75 0 0 1 0-1.5h.537c.462 0 .887.21 1.156.556.278.355.383.852.184 1.337a5.001 5.001 0 0 1-6.4 2.78C7.376 15.353 7 14.512 7 13.774V9.5H5.75a.75.75 0 0 1 0-1.5H7V6.56l-.22.22a.75.75 0 1 1-1.06-1.06l.22-.22Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small">
                  Sponsors : CodeCrafters Int. Ltd.
                </Typography>
              </div>
              <div className="flex flex-row gap-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small">ECE Building, BUET</Typography>
              </div>
              <div className="flex flex-row gap-2 text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small">
                  Saturday, February 10, 2024 AT 12:00 AM - Friday, February 16,
                  2024 AT 11:59 PM
                </Typography>
              </div>

              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography variant="small">
                  Posted By :{" "}
                  <Tooltip content={<AvatarImageText />}>
                    <span className="text-blue-600">Nahin Khan </span>
                  </Tooltip>
                  AT Monday 8 February, 11:59 PM
                </Typography>
              </div>

              <hr className="border-gray-700 my-2" />

              <div className="flex items-center gap-4">
                <Button variant="text" className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  Participating
                </Button>
                <Button variant="text" className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  Add to Bookmark
                </Button>

                <div className="ml-auto flex flex-row gap-2">
                  <Typography className="mt-1 text-green-600" variant="small">
                    participating - 300
                  </Typography>
                  <AvatarStack />
                </div>
              </div>

              <hr className="border-gray-700 my-2" />
            </div>
          </div>
          <div id="section2" data-section className="">
            <Typography variant="h3">Event Details</Typography>
            <Typography variant="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, nulla sunt enim numquam ipsum totam quo harum amet
              facilis suscipit tempora quas, sequi, earum dolorem libero minima
              atque. Quaerat repellendus dolor nobis pariatur harum, a ab optio
              magni at non, ex tempora. Modi, delectus? Sequi numquam incidunt
              fuga. Itaque, culpa soluta? Dolores neque expedita commodi omnis
              dolorem vero maiores maxime quae animi. Molestiae sunt ex nihil
              et, quia provident in itaque, nostrum nulla recusandae alias quis
              voluptate rem esse ad soluta officia corporis debitis rerum.
              <br />
              Optio modi ab sunt, repellendus placeat incidunt, perspiciatis
              earum fugit assumenda dignissimos explicabo consequatur porro
              laborum reprehenderit animi, vero exercitationem dolorem libero.
              Numquam iste perferendis nobis quibusdam earum, laborum fugiat!
              Itaque quidem autem laudantium culpa ipsa eligendi, officia, earum
              maiores voluptas nulla nam ipsam eaque fugit impedit. Expedita
              consectetur maxime cum architecto odit totam mollitia, fugit et
              quia error dolorum itaque ut labore reprehenderit, nulla, quos
              eaque voluptatum quo accusantium? Similique officia amet pariatur
              unde adipisci. Accusamus animi illum quidem, nemo recusandae
              deserunt minima labore corporis itaque maxime, ipsam pariatur,
              quae ut laboriosam
              <br />
              perferendis tempore voluptate vitae voluptas error rem doloremque
              velit asperiores incidunt? Temporibus tempore perspiciatis
              architecto odit ullam officia, culpa quod incidunt id aliquid,
              harum iure repellat praesentium! Saepe tempora veritatis, deserunt
              nulla excepturi fugiat facilis laborum aut, labore, vel optio
              iure. Voluptatem ut numquam sed consectetur laudantium labore quas
              accusamus temporibus ratione eaque voluptate, itaque ad? Illum
              obcaecati accusamus ipsam corrupti velit? Reprehenderit nisi sunt
              aliquid commodi quasi dolore cupiditate odit ad tenetur labore
              maxime nobis soluta, impedit tempore cum reiciendis, consectetur
              neque, iusto nostrum! Eligendi odio vero amet nesciunt ab facere
              quam voluptates repellendus dolores. In voluptate quasi voluptatum
              debitis blanditiis pariatur eos mollitia illum quidem itaque, id
              eveniet non iste natus, officia expedita obcaecati eum totam
              soluta aut dolorem officiis.
            </Typography>

            <hr className="border-gray-700 my-8" />
          </div>
          <div id="section3" data-section className="">
            <Typography className="italic" variant="h6">
              Registration Link :
            </Typography>
            <Typography className="text-blue-500" variant="paragraph">
              <Link href="#">https://forms.gle/5fRLbe5qxRwAG7Z36</Link>
            </Typography>
            <Typography variant="small">
              𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝑭𝒆𝒆: 𝗣𝗵𝗮𝘀𝗲-𝟭: 𝐎𝐧𝐥𝐢𝐧𝐞 <br /> Registration for the
              online round is completely FREE for all teams.
              <br /> 𝗣𝗵𝗮𝘀𝗲-𝟮: 𝐎𝐧𝐬𝐢𝐭𝐞 <br />
              Each of the 15 teams selected for the onsite round will have to
              pay a registration fee of 𝟵𝟬𝟬 𝗕𝗗𝗧 only, irrespective of the number
              of team members. Students from 𝗕𝗨𝗘𝗧 𝗖𝗦𝗘 𝟮𝟮 will be exempt from
              this rule and aren’t required to pay any registration fee upon
              selection for the onsite round.
              <br /> 𝗧𝗵𝗲 𝗽𝗮𝘆𝗺𝗲𝗻𝘁 𝗺𝗲𝘁𝗵𝗼𝗱𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲𝗱 𝗼𝗻𝗰𝗲 𝘁𝗵𝗲 𝘀𝗲𝗹𝗲𝗰𝘁𝗶𝗼𝗻
              𝗿𝗲𝘀𝘂𝗹𝘁𝘀 𝗮𝗿𝗲 𝗽𝘂𝗯𝗹𝗶𝘀𝗵𝗲𝗱.
            </Typography>
            <hr className="border-gray-700 my-8" />
          </div>

          <div id="section4" data-section className="">
            <div className="">
              <Typography className="my-4 p-8" variant="h3">
                Timeline
              </Typography>
              <Timeline className="p-4 w-1/2 ml-12">
                <TimelineItem className="h-28">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-gray-100 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-200">
                    <TimelineIcon className="p-3" variant="ghost">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        Registration
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        22 DEC 7:20 PM to 25 DEC 11:59 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-gray-100 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-200">
                    <TimelineIcon className="p-3" variant="ghost" color="red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                        />
                      </svg>
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        Online Phase
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        21 DEC 11 PM to 29 DEC 11:59 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-gray-100 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-200">
                    <TimelineIcon className="p-3" variant="ghost" color="red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                        />
                      </svg>
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        OnSite phase
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        21 DEC 11 PM to 5 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-gray-100 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-200">
                    <TimelineIcon className="p-3" variant="ghost" color="green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                      </svg>
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        Prize Giving Ceremony
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        20 DEC 2:20 AM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
              </Timeline>
            </div>

            <hr className="border-gray-700 my-8" />
          </div>

          <div id="section5" data-section className="">
            <Typography variant="h3">Prize Pools</Typography>
            <div className="mt-4 mb-12 flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <Typography variant="h6">1st Prize : </Typography>
                <Typography variant="paragraph">1,00,000 BDT</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">2nd Prize : </Typography>
                <Typography variant="paragraph">50,000 BDT</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">3rd Prize : </Typography>
                <Typography variant="paragraph">25,000 BDT</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">BUET Rising Team : </Typography>
                <Typography variant="paragraph">10,000 BDT</Typography>
              </div>
            </div>
            <hr className="border-gray-700 my-8" />
          </div>

          <div id="section6" data-section className="">
            <div className="my-12">
              <Typography variant="h3">Rules</Typography>
              <Typography className="text-red-500" variant="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Consequatur, nulla sunt enim numquam ipsum totam quo harum amet
                <br />
                facilis suscipit tempora quas, sequi, earum dolorem libero
                minima
              </Typography>
            </div>
          </div>
        </div>

        <div className="w-1/4 text-gray-400">
          <nav className="fixed">
            <ul>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section1" ? "text-black" : ""
                }`}
              >
                <a href="#section1">general Information</a>
              </li>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section2" ? "text-black" : ""
                }`}
              >
                <a href="#section2">Details</a>
              </li>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section3" ? "text-black" : ""
                }`}
              >
                <a href="#section3">Registration</a>
              </li>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section4" ? "text-black" : ""
                }`}
              >
                <a href="#section4">Timeline</a>
              </li>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section5" ? "text-black" : ""
                }`}
              >
                <a href="#section5">prizePools</a>
              </li>
              <li
                className={`py-2 px-4 ${
                  activeSection === "section6" ? "text-black" : ""
                }`}
              >
                <a href="#section6">Rules</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ScrollSpy;
