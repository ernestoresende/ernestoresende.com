export function AboutMe() {
  return (
    <section className="px-8 flex h-screen-4/6 justify-center items-center">
      <div className="max-w-2xl w-full font-body font-normal leading-8 text-base text-lavander-gray">
        <h1 className="font-display font-extrabold text-4xl text-flash-white pb-6">me.</h1>
        <p className="pb-8">
          Hello, I&apos;m Ernesto, a software engineer from Brazil who has been working with the web platform since
          2019.
        </p>
        <p className="pb-8">
          I started out focusing exclusively on solving frontend problems, but nowadays I do find myself constantly
          jumping between <b>design</b>, <b>frontend</b> and
          <b>backend</b> engineering tasks. I specially like working with design systems, and have a keen interest in
          building backends with serverless architectures in mind.
        </p>
        <p className="pb-8">
          For a kinda up to date info, you can{' '}
          <a
            href="#"
            className="underline decoration-2 underline-offset-4 decoration-eletric-pink hover:text-flash-white transition duration-300"
          >
            <b>see what I&apos;m doing now.</b>
          </a>
        </p>
      </div>
    </section>
  )
}
