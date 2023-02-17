import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { ActivityDetails } from "./data/activities.ts";
import { locations } from "./data/locations.ts";

const app = new Application();
app.use(oakCors());

const router = new Router();

router
  .get("/api", (context) => {
    context.response.body = "Hello!";
  })
  .get("/api/random", (context) => {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];

    const randomActivityId =
      randomLocation.activities[
        Math.floor(Math.random() * randomLocation.activities.length)
      ];

    const randomActivity = ActivityDetails[randomActivityId];

    context.response.body = {
      data: {
        activityDescription: randomActivity?.description,
        activityName: randomActivity?.name,
        coords: randomLocation.coords,
        locationName: randomLocation.name,
        locationType: randomLocation.type,
        vibe: randomActivity?.vibe,
      },
    };
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
