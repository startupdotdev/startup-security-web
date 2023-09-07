import { Form } from "@remix-run/react";
import Footer from "./footer";
import Slide from "./slide";

interface Props {
  message: string;
}

export default function ContactForm({ message }: Props) {
  return (
    <Slide>
      <div
        className="flex flex-col justify-between items-center h-3/4 w-full bg-no-repeat bg-cover p-6"
        id="contact"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1131%26quot%3b)' fill='none'%3e%3crect width='1440' height='250' x='0' y='0' fill='url(%23SvgjsLinearGradient1132)'%3e%3c/rect%3e%3cpath d='M14 250L264 0L481.5 0L231.5 250z' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/path%3e%3cpath d='M272.6 250L522.6 0L606.6 0L356.6 250z' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/path%3e%3cpath d='M484.20000000000005 250L734.2 0L1004.2 0L754.2 250z' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/path%3e%3cpath d='M757.8000000000001 250L1007.8000000000001 0L1325.8000000000002 0L1075.8000000000002 250z' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/path%3e%3cpath d='M1429 250L1179 0L1123.5 0L1373.5 250z' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/path%3e%3cpath d='M1168.4 250L918.4000000000001 0L730.9000000000001 0L980.9000000000001 250z' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/path%3e%3cpath d='M918.8 250L668.8 0L613.3 0L863.3 250z' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/path%3e%3cpath d='M726.1999999999999 250L476.19999999999993 0L156.69999999999993 0L406.69999999999993 250z' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/path%3e%3cpath d='M1202.6700996838688 250L1440 12.670099683868756L1440 250z' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/path%3e%3cpath d='M0 250L237.32990031613124 250L 0 12.670099683868756z' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1131'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='79.34%25' y1='219%25' x2='20.66%25' y2='-119%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1132'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(23%2c 23%2c 23%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1133'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1134'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
        }}
      >
        <div className="w-full max-w-md mt-32 mb-40">
          <div className="w-full">
            <div className="text-4xl lg:text-5xl mb-6">Get In Touch</div>

            {!message && (
              <Form method="post" className="flex flex-col">
                <label className="mb-1">Your email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@awesome.co"
                  className="mb-2 p-2 text-[#171717] rounded-none"
                />

                <button
                  className="border border-1 border-white py-2 px-6 text-center text-white font-bold text-lg"
                  type="submit"
                >
                  Let's Talk
                </button>
              </Form>
            )}
            {message && <p className="text-xl">{message}</p>}
          </div>
        </div>
        <Footer />
      </div>
    </Slide>
  );
}
