import Link from "next/Link";

export default function MeetingRooms() {
  const meetingRoomLink = `https://members.catalyst-commons.com/public/calendar/meeting_room?participants=1,41&start=2023-11-21T20:50:26.740Z`;

  //officeRND public meeting room booking redirect
  function handleMeetingRoomClick() {
    window.open(meetingRoomLink, "_blank", "noreferrer");
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <br></br>
      Meeting Rooms
      <br></br>
      <button onClick={handleMeetingRoomClick}> Book a Meeting Room </button>
    </div>
  );
}
