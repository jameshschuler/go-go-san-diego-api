import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { locations } from "./data/locations.ts";

const app = new Application();
const router = new Router();

router
  .get("/api", (context) => {
    context.response.body = "Hello!";
  })
  .get("/api/random", (context) => {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];

    const randomActivity =
      randomLocation.activities[
        Math.floor(Math.random() * randomLocation.activities.length)
      ];

    context.response.body = {
      data: {
        locationName: randomLocation.name,
        locationType: randomLocation.type,
        activityName: randomActivity?.name,
        activityDescription: randomActivity?.description,
        vibe: randomActivity?.vibe,
      },
    };
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
