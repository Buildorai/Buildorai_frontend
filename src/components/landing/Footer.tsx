// === Landing: Footer component ===
import Link from "next/link";
import { Send } from "lucide-react";
import Image from "next/image";

const SocialIcon = ({ path, size = 20, viewBox = "0 0 24 24" }: { path: string, size?: number, viewBox?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="currentColor"
    className="text-text-secondary transition-colors hover:text-white cursor-pointer"
  >
    <path d={path} />
  </svg>
);

const FacebookIcon = (props: any) => <SocialIcon {...props} path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />;
const LinkedinIcon = (props: any) => <SocialIcon {...props} path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />;
const TwitterXIcon = (props: any) => <SocialIcon {...props} path="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />;
const YoutubeIcon = (props: any) => <SocialIcon {...props} path="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48L15.45 11.75z" />;


const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-text-secondary transition-colors hover:text-white cursor-pointer"
  >
    <path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.598 2.169 1.777 2.169 2.132 0 3.771-2.249 3.771-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.965 7.397 6.93 0 4.135-2.607 7.462-6.223 7.462-1.215 0-2.358-.631-2.75-1.378l-.748 2.853c-.3 1.141-1.114 2.57-1.659 3.441 1.124.347 2.316.536 3.55.536 6.628 0 12-5.372 12-12S18.628 0 12 0z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10">
      <div className="container mx-auto max-w-6xl px-4 text-center sm:text-left">

        {/* Newsletter Section */}
        <div className="mb-20 rounded-[2.5rem] border border-white/5 bg-surface/20 p-8 md:p-14 backdrop-blur-sm overflow-hidden relative group">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Stay in the <span className="text-primary italic">Loop</span>
              </h3>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                Join the vanguard of engineering. Get exclusive platform updates and strategic AI coordination insights delivered weekly.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-16 flex-1 rounded-2xl border border-white/10 bg-background/50 px-6 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm font-medium"
                />
                <button className="h-16 rounded-2xl bg-primary px-8 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30 active:scale-95 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-center lg:text-left text-xs text-text-secondary opacity-60">
                Strategic updates only. No spam, ever.
              </p>
            </div>
          </div>

          {/* Visual Background Accents */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px] transition-all duration-700 group-hover:bg-primary/20" />
          <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-primary/5 blur-[120px] transition-all duration-700 group-hover:bg-primary/10" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="mb-6 flex -ml-1 items-center gap-3 text-2xl font-bold tracking-tight text-white font-heading transition-opacity hover:opacity-80">
              <Image
                src="/logo.svg"
                alt="Buildorai Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              Buildorai
            </Link>
            <p className="mb-8 max-w-md text-base leading-relaxed text-text-secondary">
              The AI-powered command center for modern engineering teams.
              Automate coordination, optimize scheduling, and scale without limits.
              GPU-accelerated project intelligence at your fingertips.
            </p>
            <div className="flex gap-6 justify-center sm:justify-start">
              <FacebookIcon size={20} />
              <LinkedinIcon size={20} />
              <TwitterXIcon size={20} />
              <PinterestIcon size={20} />
              <YoutubeIcon size={20} />
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Product</h4>
            <ul className="space-y-4 text-base text-text-secondary">
              <li><Link href="/overview" className="transition-colors hover:text-primary">Platform</Link></li>
              <li><button className="transition-colors hover:text-primary">Features</button></li>
              <li><button className="transition-colors hover:text-primary">Pricing</button></li>
              <li><button className="transition-colors hover:text-primary">API Docs (Coming Soon)</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
            <ul className="space-y-4 text-base text-text-secondary">
              <li><button className="transition-colors hover:text-primary">Privacy Policy</button></li>
              <li><button className="transition-colors hover:text-primary">Terms of Service</button></li>
              <li><button className="transition-colors hover:text-primary">Security</button></li>
              <li><button className="transition-colors hover:text-primary">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-10 text-center text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} Buildorai. All rights reserved. Powered by NVIDIA SDK.</p>
        </div>
      </div>
    </footer>
  );
}
