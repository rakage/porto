"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import {
  FigmaOriginal,
  GitOriginal,
  LaravelOriginal,
  MongodbOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PostmanOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  FastapiOriginal,
} from "devicons-react";
import { FaLinkedin } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiExpress, SiGithub, SiApacheairflow, SiN8N } from "react-icons/si";
import { BiData, BiBarChartAlt2 } from "react-icons/bi";

import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { scrollToSection } from "@/libs/utils";
import ContactForm from "@/components/contact-form";
import { CV_LINK } from "@/libs/constants";

const NavBar = dynamic(() => import("@/components/navbar"), { ssr: false });

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="hero" className="flex flex-col min-h-dvh snap-start">
          <HeroHighlight
            containerClassName="min-h-dvh"
            className="w-full lg:h-full"
          >
            <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-y-10 lg:gap-x-40 mx-10 md:mx-20 lg:mx-40 h-full">
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start w-full lg:w-1/2 gap-y-4">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                    delay: 0.5,
                  }}
                >
                  <motion.span
                    initial={{
                      backgroundSize: "0% 100%",
                    }}
                    animate={{
                      backgroundSize: "100% 100%",
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                      delay: 1,
                    }}
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                      display: "inline",
                    }}
                    className="relative inline-block rounded-lg bg-gradient-to-r from-blue-700 to-blue-700 px-1 pb-1 text-white font-satoshi font-medium text-lg md:text-xl w-fit"
                  >
                    Data, Software, and AI Engineer
                  </motion.span>
                </motion.div>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-3xl md:text-5xl lg:text-7xl font-clashDisplay font-medium text-center lg:text-left text-white leading-tight"
                >
                  Raka Luthfi
                </motion.h1>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                    delay: 1,
                  }}
                  className="flex flex-col md:flex-row gap-x-2 gap-y-3 mt-2 w-full md:w-fit"
                >
                  <button
                    className="flex items-center justify-center lg:justify-start gap-x-2 bg-blue-700 font-satoshi font-medium text-white text-sm md:text-base lg:text-lg px-4 py-2 rounded-full w-full md:w-fit hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition-all duration-300 cursor-pointer"
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                    <IoChevronForwardSharp size={14} />
                  </button>

                  <Link
                    href={CV_LINK}
                    target="_blank"
                    className="flex items-center justify-center lg:justify-start gap-x-2 bg-gray-50 font-satoshi font-medium text-blue-700 text-sm md:text-base lg:text-lg px-4 py-2 rounded-full w-full md:w-fit hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    Download CV
                    <MdOutlineFileDownload size={14} />
                  </Link>
                </motion.div>
              </div>

              <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full justify-center items-center">
                <div className="flex flex-col w-full h-full lg:h-full justify-center items-center">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: [20, -5, 0],
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                  >
                    <Image
                      priority
                      src="/assets/images/profile.png"
                      alt="Raka Luthfi"
                      layout="responsive"
                      width={1000}
                      height={1000}
                      sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </HeroHighlight>
        </section>

        <section
          id="about"
          className="flex flex-col xl:flex-row min-h-dvh bg-[#0b0b0d] snap-start px-10 md:px-20 xl:px-40 pt-10 pb-20 md:py-14 xl:py-16 gap-x-2 gap-y-4 md:gap-y-6 xl:gap-y-8"
        >
          <div className="flex flex-col lg:justify-center gap-y-6 md:gap-y-8 bg-[#131316] rounded-lg xl:rounded-r-4xl p-10 md:p-20 border border-[#202024] hover:border-blue-700 transition-all duration-300 w-full xl:w-1/2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="text-white text-2xl md:text-4xl lg:text-5xl font-clashDisplay font-medium"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.5,
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="text-white text-base md:text-xl font-satoshi text-justify md:text-left text-wrap leading-relaxed"
            >
              A Data, Software, and AI Engineer with a strong focus on
              developing impactful solutions. Experienced in building dynamic
              dashboards, automating ETL pipelines, and crafting intelligent
              AI-powered applications. Passionate about leveraging data and
              technology to drive business innovation and create seamless user
              experiences through automation and web development.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 1,
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
            >
              <Link
                href="https://www.linkedin.com/in/rakaluth/"
                target="_blank"
                className="flex items-center justify-center lg:justify-start gap-x-2 bg-blue-700 font-satoshi font-medium text-white text-sm md:text-base lg:text-lg px-4 py-2 rounded-full w-full md:w-fit hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <FaLinkedin size={18} />
                Connect on LinkedIn
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col gap-y-6 md:gap-y-8 bg-[#131316] rounded-lg xl:rounded-l-4xl p-10 md:p-20 border border-[#202024] hover:border-blue-700 transition-all duration-300 w-full xl:w-1/2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="text-white text-2xl md:text-4xl lg:text-5xl font-clashDisplay font-medium"
            >
              Skills
            </motion.h2>

            <div className="flex flex-col gap-y-10">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0.0, 0.2, 1],
                  delay: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col gap-y-5"
              >
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-clashDisplay font-medium">
                  Frontend
                </h3>

                <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.5,
                          delayChildren: 1,
                        },
                      },
                    }}
                    className="flex flex-row flex-wrap gap-x-2 gap-y-3"
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Next.js"
                        icon={<NextjsOriginal size={20} />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="React.js"
                        icon={<ReactOriginal size={20} />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Tailwind CSS"
                        icon={<TailwindcssOriginal size={20} />}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0.0, 0.2, 1],
                  delay: 1,
                }}
                whileInView={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col gap-y-5"
              >
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-clashDisplay font-medium">
                  Backend
                </h3>

                <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.5,
                          delayChildren: 1,
                        },
                      },
                    }}
                    className="flex flex-row flex-wrap gap-x-2 gap-y-3"
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Node.js"
                        icon={<NodejsOriginal size={20} />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Express.js"
                        icon={<SiExpress size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="FastAPI"
                        icon={<FastapiOriginal size={20} />}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0.0, 0.2, 1],
                  delay: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col gap-y-5"
              >
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-clashDisplay font-medium">
                  Data & AI
                </h3>

                <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.5,
                          delayChildren: 1,
                        },
                      },
                    }}
                    className="flex flex-row flex-wrap gap-x-2 gap-y-3"
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Python"
                        icon={<PythonOriginal size={20} />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Power BI"
                        icon={<BiBarChartAlt2 size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Apache Airflow"
                        icon={<SiApacheairflow size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="LangChain"
                        icon={<BiData size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="n8n"
                        icon={<SiN8N size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="PostgreSQL"
                        icon={<PostgresqlOriginal size={20} />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="MySQL"
                        icon={<GrMysql size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="MongoDB"
                        icon={<MongodbOriginal size={20} />}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0.0, 0.2, 1],
                  delay: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col gap-y-5"
              >
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-clashDisplay font-medium">
                  Tools
                </h3>

                <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.5,
                          delayChildren: 1,
                        },
                      },
                    }}
                    className="flex flex-row flex-wrap gap-x-2 gap-y-3"
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard skill="Git" icon={<GitOriginal size={20} />} />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="GitHub"
                        icon={<SiGithub size={20} color="white" />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Figma"
                        icon={<FigmaOriginal size={20} />}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <SkillCard
                        skill="Postman"
                        icon={<PostmanOriginal size={20} />}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="experiences"
          className="flex flex-col xl:flex-row justify-center xl:justify-start xl:items-center min-h-dvh bg-[#0b0b0d] snap-start px-10 md:px-20 xl:px-40 py-10 md:py-14 xl:py-16 gap-x-2 xl:gap-x-40 gap-y-4 md:gap-y-6 xl:gap-y-8 w-full"
        >
          <div className="w-1/4">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="xl:sticky xl:top-10 text-white text-2xl md:text-4xl lg:text-5xl font-clashDisplay font-medium"
            >
              Experiences
            </motion.h2>
          </div>

          <div className="w-full xl:w-3/4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.5,
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-y-6 md:gap-y-8 bg-[#131316] rounded-lg p-10 border border-[#202024] hover:border-blue-700 transition-all duration-300 w-full"
            >
              <div className="flex flex-col md:flex-row justify-between gap-x-4">
                <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-3 md:gap-y-0">
                  <div className="relative w-8 h-8 md:w-10 md:h-10 bg-blue-700 rounded-full">
                    <Image
                      src="/assets/logo/salsation.jpg"
                      alt="Salsation Logo"
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <h3 className="text-white text-sm md:text-base lg:text-lg font-clashDisplay font-medium">
                      Salsation
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm font-satoshi">
                      Data & Integration
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-xs md:text-sm font-satoshi">
                  June 2025 - Present
                </p>
              </div>

              <ul className="list-disc list-inside text-white text-sm md:text-lg font-satoshi leading-relaxed">
                <li>
                  Developed and deployed Telegram-based AI chatbots using LLMs,
                  resulting in a 30% reduction in manual support tickets.
                </li>
                <li>
                  Designed and built data marts and automated ETL pipelines to
                  streamline data integration processes.
                </li>
                <li>
                  Created interactive dashboards and reports using Power BI for
                  business insights.
                </li>
                <li>
                  Automated email marketing workflows and implemented data
                  synchronization between customer databases and marketing
                  software.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.5,
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-y-6 md:gap-y-8 bg-[#131316] rounded-lg p-10 border border-[#202024] hover:border-blue-700 transition-all duration-300 w-full mt-6 md:mt-8"
            >
              <div className="flex flex-col md:flex-row justify-between gap-x-4">
                <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-3 md:gap-y-0">
                  <div className="relative w-8 h-8 md:w-10 md:h-10 bg-blue-700 rounded-full">
                    <Image
                      src="/assets/logo/bankmega.png"
                      alt="Bank Mega Logo"
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <h3 className="text-white text-sm md:text-base lg:text-lg font-clashDisplay font-medium">
                      Bank Mega
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm font-satoshi">
                      Data Scientist
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-xs md:text-sm font-satoshi">
                  February 2023 - June 2025
                </p>
              </div>

              <ul className="list-disc list-inside text-white text-sm md:text-lg font-satoshi leading-relaxed">
                <li>
                  Developed chatbots with advanced retrieval-augmented
                  generation (RAG) capabilities using LangChain, optimizing
                  prompt engineering.
                </li>
                <li>
                  Developed a fraud detection project to identify anomalies in
                  high-value transactions.
                </li>
                <li>
                  Automated ETL workflows using Apache Airflow for daily
                  scheduling and monitoring.
                </li>
                <li>
                  Developed interactive dashboards using Metabase and Power BI,
                  and built custom web dashboards leveraging React.js.
                </li>
                <li>
                  Created and implemented Python scripts to automate repetitive
                  tasks and optimize workflows.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section
          id="projects"
          className="flex flex-col min-h-dvh bg-[#0b0b0d] snap-start px-10 md:px-20 xl:px-40 pt-10 pb-20 md:py-28 xl:py-30 gap-x-2 gap-y-4 md:gap-y-6 xl:gap-y-8"
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            whileInView={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            viewport={{
              once: true,
            }}
            className="text-white text-2xl md:text-4xl lg:text-5xl font-clashDisplay font-medium"
          >
            Projects
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.5,
                  delayChildren: 1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                image="/assets/images/saunabali.png"
                title="Sauna Bali"
                liveLink="https://saunaicebali.com/"
                repoLink=""
                skills={[
                  <SkillCard
                    key="next.js"
                    skill="Next.js"
                    icon={<NextjsOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="react"
                    skill="React.js"
                    icon={<ReactOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="tailwind"
                    skill="Tailwind CSS"
                    icon={<TailwindcssOriginal size={20} />}
                    size="small"
                  />,
                ]}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                image="/assets/images/movier.png"
                title="Movier"
                liveLink="https://movier-id.vercel.app/"
                repoLink=""
                skills={[
                  <SkillCard
                    key="next.js"
                    skill="Next.js"
                    icon={<NextjsOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="react"
                    skill="React.js"
                    icon={<ReactOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="tailwind"
                    skill="Tailwind CSS"
                    icon={<TailwindcssOriginal size={20} />}
                    size="small"
                  />,
                ]}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                image="/assets/images/weather-id.png"
                title="WeatherID"
                liveLink="https://weatherid.vercel.app/"
                repoLink=""
                skills={[
                  <SkillCard
                    key="next.js"
                    skill="Next.js"
                    icon={<NextjsOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="react"
                    skill="React.js"
                    icon={<ReactOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="tailwind"
                    skill="Tailwind CSS"
                    icon={<TailwindcssOriginal size={20} />}
                    size="small"
                  />,
                ]}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                image="/assets/images/pomodoro.png"
                title="Pomodoro"
                liveLink="https://pomodoro.vercel.app/"
                repoLink=""
                skills={[
                  <SkillCard
                    key="next.js"
                    skill="Next.js"
                    icon={<NextjsOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="react"
                    skill="React.js"
                    icon={<ReactOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="tailwind"
                    skill="Tailwind CSS"
                    icon={<TailwindcssOriginal size={20} />}
                    size="small"
                  />,
                ]}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                image="/assets/images/quezt.png"
                title="Quezt"
                repoLink=""
                skills={[
                  <SkillCard
                    key="laravel"
                    skill="Laravel"
                    icon={<LaravelOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="react"
                    skill="React.js"
                    icon={<ReactOriginal size={20} />}
                    size="small"
                  />,
                  <SkillCard
                    key="tailwind"
                    skill="Tailwind CSS"
                    icon={<TailwindcssOriginal size={20} />}
                    size="small"
                  />,
                ]}
              />
            </motion.div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="flex flex-col xl:flex-row justify-center xl:justify-start xl:items-start min-h-dvh bg-[#0b0b0d] snap-start px-10 md:px-20 xl:px-40 py-10 md:py-14 xl:pb-16 xl:pt-32 gap-x-2 xl:gap-x-20 gap-y-4 md:gap-y-6 xl:gap-y-8 w-full"
        >
          <div className="flex flex-col gap-y-6 w-full xl:w-1/2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="xl:sticky xl:top-10 text-white text-2xl md:text-4xl lg:text-5xl font-clashDisplay font-medium"
            >
              Contact
            </motion.h2>

            <p className="text-gray-400 text-sm md:text-base lg:text-lg font-satoshi">
              If you have any questions or just want to say hi, feel free to
              reach out to me. I will try to respond as soon as possible.
            </p>
          </div>

          <div className="w-full xl:w-1/2">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.5,
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-y-6 md:gap-y-8 bg-[#131316] rounded-lg p-10 border border-[#202024] transition-all duration-300 w-full"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
