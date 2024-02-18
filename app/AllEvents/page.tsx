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
                    <h2>{event.title}</h2>
                    <div className="flex flex-row gap-2">
                      <div className="">
                        {event.startDate} - {event.finishDate}
                      </div>
                      <div className="">{event.location}</div>
                      <div className="">{event.eventType}</div>
                      <div className="">{event.tag}</div>
                    </div>
                    <Link href={`/SingleEvent/${event.id}`} className=" text-blue-700 underline">See More...</Link>
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