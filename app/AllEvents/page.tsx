import POST from "@/server_actions/POST";
import Link from "next/link";

async function Allevents() {
  const res = await POST("event/getEvents", {});
  if (res) {
    console.log(res);
    return (
      <div>
        <h1>All Events</h1>
        <div className="flex flex-row">
          <div className="w-3/4">
            <ul>
              {res.events.map((event: any) => (
                <li key={event.id}>
                  <div className="border my-2 border-orange-400 shadow-xl">
                    <Link href={`/SingleEvent/${event.id}`}>{event.title}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Events not found</div>;
  }
}

export default Allevents;
