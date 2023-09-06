import Menu from "~/components/menu";
import Slide from "~/components/slide";
import ContactForm from "~/components/contact-form";
import submitContactUs from "~/lib/submit-contact-us";

import { type ActionFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLocation,
  useTransition,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";

import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const SUCCESS_MESSAGE = "Thanks, We'll Reply Soon";

const validateEmail = (email: string) => {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Valid Email Please";
  }
};

const trustedBys: string[] = [
  "/images/semi-trusted/logo-google1.png",
  "/images/semi-trusted/logo-youtube.png",
  "/images/semi-trusted/logo-facebook.png",
  "/images/semi-trusted/logo-ea.png",
  "/images/semi-trusted/logo-okta.png",
  "/images/semi-trusted/logo-envoy.png",
  "/images/semi-trusted/logo-hackerone.png",
  "/images/semi-trusted/logo-havo.png",
];

const services: {
  title: string;
  subtitle: string;
  icon: string;
}[] = [
  {
    title: "Initialize Security",
    subtitle:
      "We kickstart your security program: Understand your attack surfaces, pick the right tools, and get started",
    icon: "/images/icons/shield-flash-fill.svg",
  },
  {
    title: "Security Engineering",
    subtitle:
      "We save your engineers time by triaging bug reports, fixing vulnerabilities, and helping with secure code design.",
    icon: "/images/icons/treasure-map-fill.svg",
  },
  {
    title: "DevSecOps",
    subtitle:
      "We harden and secure your infrastructure and delivery workflows without slowing your team down.",
    icon: "/images/icons/ship-fill.svg",
  },
];

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString() || "";

  return await submitContactUs(email);
};

export default function Index() {
  let location = useLocation();
  const data = useActionData();
  const transition = useTransition();

  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  let [visitorId, setVisitorId] = useState<string>();

  const message: string = useActionData() as string;

  useEffect(() => {
    if (data?.formMessage?.email === SUCCESS_MESSAGE && !hasSubmitted) {
      setHasSubmitted(true);
      toast.success("Email submitted!", { position: "bottom-center" });
    }
  }, [data?.formMessage?.email, hasSubmitted]);

  useEffect(() => {
    const fpPromise = FingerprintJS.load({
      apiKey: "9sCCEFv95ZaGTIP6yc29",
    });

    // Get the visitor identifier when you need it.
    fpPromise
      .then((fp) => fp.get())
      .then((id) => {
        setVisitorId(id.visitorId);
      });
  }, [location]);

  return (
    <div>
      <Menu />
      <Slide>
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: "url(/images/grid-red-40.jpg)",
          }}
          id="top"
        >
          <div className="m-auto max-w-5xl p-3 md:p-12">
            <div className="m-auto max-w-5xl ">
              <div className="flex mb-24">
                <div className="flex-grow">
                  <img
                    className="w-56"
                    src="/images/logo4.png"
                    alt="startup security"
                  />
                </div>
                <div>
                  <a className="header" href="https://blog.startup.security">
                    Blog
                  </a>
                </div>
              </div>
              <div className="text-5xl lg:text-7xl max-w-3xl mb-8 leading-tight">
                <span style={{ color: "#D42828" }}>
                  You built something awesome.
                </span>{" "}
                Let's make sure it's secure.
              </div>
              <div className="text-2xl mb-10">
                We help startups evolve their security tools, processes, and
                culture
              </div>
              <div className="mb-12 md:mb-24">
                <button className="border border-1 border-white py-3 px-6 text-center text-white font-bold text-lg">
                  <a href="/#contact">Let's Talk</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className="bg-cover h-cover bg-bottom shadow-inner shadow-i"
          style={{
            background: "#E6E6E6",
            minWidth: 320,
            boxShadow: "inset 0px 20px 10px -5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="m-auto max-w-5xl py-24 px-3 md:px-12 relative">
            <div className="text-2xl uppercase font-bold space-x-3 pb-12 text-gray-600">
              Trusted by
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-24 pb-12 items-center opacity-80">
              {trustedBys.map((l, i) => (
                <img
                  src={l}
                  key={i}
                  style={{ maxWidth: 180 }}
                  className="p-4 text-current"
                  alt="Logo"
                />
              ))}
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div
          className="bg-cover h-cover bg-bottom shadow-inner shadow-i"
          style={{
            background: "#6E6E6E",
            minWidth: 320,
            boxShadow: "inset 0px 20px 10px -5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="m-auto max-w-5xl py-24 px-3 md:px-12 relative">
            <div className="text-2xl uppercase font-bold space-x-3 text-gray-300">
              How we can help
            </div>
            <div className="my-16 text-4xl md:text-6xl font-light leading-tight">
              We work with growing startups to design and implement custom
              security programs.
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-24 py-12 items-center opacity-80 align-baseline"
              style={{ alignItems: "baseline" }}
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className="mb-24 md:mb-0 align-baseline justify-start "
                >
                  <div className="">
                    <img src={s.icon} width="50" alt="icon" />
                  </div>
                  <div className="bg-gray-400 my-6 h-1 w-3/5">&nbsp;</div>
                  <div className="text-2xl mb-4">{s.title}</div>
                  <div className="mb-4">{s.subtitle}</div>
                </div>
              ))}
            </div>

            <div className="text-2xl mb-8 opacity-60">
              Let's address your crucial threats without slowing down your
              roadmap.
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <ContactForm message={message} />
      </Slide>
    </div>
  );
}
