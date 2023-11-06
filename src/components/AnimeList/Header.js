import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="font-bold text-2xl text-color-primary">{title}</h1>

      {/* Validasi Link jika linkHref dan linkTitle kosong maka biarkan saja (Search) */}
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline hover:text-color-accent text-color-primary  transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
