export default function Contact({ inline=false }){
  return (
    <form id="contact" className={inline ? 'space-y-4' : 'max-w-2xl mx-auto space-y-4'}>
      <div className="grid md:grid-cols-2 gap-4">
        <input required placeholder="Full Name*" className="border p-3 rounded-md w-full" />
        <input required placeholder="Phone" className="border p-3 rounded-md w-full" />
      </div>

      <input placeholder="Institution name*" className="border p-3 rounded-md w-full" />
      <textarea placeholder="Message*" rows={5} className="border p-3 rounded-md w-full" />

      <div className="text-right">
        <button type="submit" className="bg-accent text-white px-5 py-2 rounded-md">Send Message</button>
      </div>
    </form>
  )
}
