import Link from "next/Link";


export default function Newsletter () {
  const newsletterLink = `https://ccommons.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Fccommons.substack.com%2F`;

  function handleSignUpClick() {
    window.open(newsletterLink, "_blank", "noreferrer");
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <br></br>
      Newsletter
      <br></br>
      <button onClick={handleSignUpClick}> Click Here To Sign Up For Our Newsletter </button>
    </div>
  )
}