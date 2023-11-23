import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/Link";
import { DarkModeSwitcher } from "@/components/DarkModeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const calendlyLink = `https://calendly.com/d/y65-fkg-7nm/book-a-tour-of-catalyst-commons`;
  const meetingRoomLink = `https://members.catalyst-commons.com/public/calendar/meeting_room?participants=1,41&start=2023-11-21T20:50:26.740Z`;
  const memberLoginLink = "https://members.catalyst-commons.com/login";

  //calendly redirect
  function handleBookTourClick() {
    window.open(calendlyLink, "_blank", "noreferrer");
  }

  //officeRND public meeting room booking redirect
  function handleMeetingRoomClick() {
    window.open(meetingRoomLink, "_blank", "noreferrer");
  }

  //officeRND members login redirect
  function handleMembersLoginClick() {
    window.open(memberLoginLink, "_blank", "noreferrer");
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <br></br>
      < DarkModeSwitcher />
      <br></br>
      <button onClick={handleBookTourClick}> Book a Tour </button>
      <br></br>
      <button onClick={handleMeetingRoomClick}> Book a Meeting Room </button>
      <br></br>
      <button onClick={handleMembersLoginClick}> Member Login </button>
      <br></br>
      <Link href="/contact-us">Contact Us</Link>
      <br></br>
      <Link href="/office-solutions">Office Solutions</Link>
      <br></br>
      <Link href="/meeting-rooms">Meeting Rooms</Link>
      <br></br>
      <Link href="/community-events">Community Events</Link>
      <br></br>
      <Link href="/amenities">Amenities</Link>
      <br></br>
      <Link href="/newsletter">Newsletter</Link>
      <br></br>
      <Link href="/partnerships">Partnerships</Link>
      <br></br>
      <br></br>
      <iframe
        src="https://storage.googleapis.com/maps-solutions-jb8dudp4id/locator-plus/mlri/locator-plus.html"
        width="700px"
        height="400px"
        loading="lazy"
      ></iframe>
    </div>
  );
}
