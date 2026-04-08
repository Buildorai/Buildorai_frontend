// === Landing: Footer component ===
import Link from "next/link";
import { Terminal, Globe, Cpu, Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10">
      <div className="container mx-auto max-w-6xl px-4 text-center sm:text-left">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="mb-6 flex -ml-1 items-center gap-2 text-2xl font-bold tracking-tight text-white font-heading">
              <div className="rounded-lg bg-primary p-1 text-white">
                <Terminal size={24} />
              </div>
              Buildorai
            </Link>
            <p className="mb-8 max-w-md text-base leading-relaxed text-text-secondary">
              The AI-powered command center for modern engineering teams. 
              Automate coordination, optimize scheduling, and scale without limits. 
              GPU-accelerated project intelligence at your fingertips.
            </p>
            <div className="flex gap-5 justify-center sm:justify-start">
              <Globe size={20} className="text-text-secondary transition-colors hover:text-white cursor-pointer" />
              <Cpu size={20} className="text-text-secondary transition-colors hover:text-white cursor-pointer" />
              <Layers size={20} className="text-text-secondary transition-colors hover:text-white cursor-pointer" />
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
