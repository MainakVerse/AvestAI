import Link from "next/link";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link href="/" className="font-bold text-xl flex">
            <LogoIcon />
            Avest-AI
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Github
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Twitter
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Dribbble
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Web
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Mobile
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Desktop
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Features
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Pricing
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Youtube
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Discord
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Twitch
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {new Date().getFullYear()}{" "} Made by{" "}
          <Link
            target="_blank"
            href="https://supernova-mv.netlify.app/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Supernova
          </Link>
        </h3>
      </section>
    </footer>
  );
};
