export const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="scroll-mt-24 flex items-center justify-center">
        <div className="w-full max-w-4xl text-center font-body text-base font-normal leading-8 text-lavander-gray">
          <h2 className="pb-3 text-center font-display text-4xl font-extrabold text-flash-white">
            get in touch
          </h2>
          <p className="pb-10 text-center">
            I am currently looking for new projects to join, and my inbox is
            always open. Drop by if you're interested on hiring me for
            a project or just want to say hi!
          </p>
          <a
            href="mailto:dev@ernestoresende.com"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer rounded-md border-2 border-eletric-pink py-3 px-6 font-display font-bold text-eletric-pink transition duration-150 hover:bg-eletric-pink/10"
          >
            say hello
          </a>
        </div>
      </section>
    </>
  )
}
