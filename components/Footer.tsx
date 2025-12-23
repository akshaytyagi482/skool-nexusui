import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Image src="/logo-white.svg" alt="Skool Nexus" width={180} height={36} />
          <p className="mt-4 text-sm">Empowering Schools with Smart ERP Solutions. Transform your institution with our comprehensive management platform.</p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="/social"><Image src="/social/facebook.svg" alt="Facebook" width={20} height={20} /></Link>
            <Link href=""><Image src="/social/twitter.svg" alt="Twitter" width={20} height={20} /></Link>
            <Link href=""><Image src="/social/instagram.svg" alt="Instagram" width={20} height={20} /></Link>
            <Link href=""><Image src="/social/Linkedin.svg" alt="LinkedIn" width={20} height={20} /></Link>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Top Features</h5>
          <ul className="text-sm space-y-2">
            <li>Student Management</li>
            <li>Employee Management</li>
            <li>Exam Management</li>
            <li>Library Management</li>
            <li>Attendance Management</li>
            <li>Fees Management</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <p className="text-sm">support@skoolnexus.live</p>
          <p className="text-sm mt-2">+91 7289890084</p>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 text-sm py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <div>© 2025 Skool Nexus. All rights reserved.</div>
          <div className="space-x-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
