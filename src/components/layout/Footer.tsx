export const Footer = () => {
  const navLinks = [
    { href: "#main", label: "Main" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#templates", label: "Templates" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <footer className='bg-zinc-100 px-10 mt-10'>
      <div className='flex flex-col gap-10 mx-auto bg-white py-10 px-10 rounded-t-[32px]'>
        <nav>
          <ul className='flex flex-wrap justify-center gap-6 max-w-[460px] w-full mx-auto'>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className='block truncate whitespace-nowrap transition-colors hover:text-accent-500 text-center'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className='flex justify-between gap-4 w-full max-w-[168px] mx-auto'>
          <li>
            <a href='#'>
              <img src='/icon-linkedin.svg' alt='LinkedIn' />
            </a>
          </li>
          <li>
            <a href='https://github.com/VibeTechTeam'>
              <img src='/icon-github.svg' alt='GitHub' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/icon-fb.svg' alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/icon-discord.svg' alt='Discord' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
