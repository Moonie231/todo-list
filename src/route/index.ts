import Elysia, { t } from "elysia";
import { Task } from "../model/task";

function route(app: any) {
  app.group("/api", (app: Elysia) =>
    app
      .get("/", async () => {
        try {
          let task = await Task.find();
          return task;
        } catch (error) {
          return error;
        }
      })
      .post(
        "/add",
        async ({ body: { title, description, status, deadline } }) => {
          let task = new Task({
            title: title,
            description: description,
            status: status,
            deadline: new Date(deadline),
          });
          let newTask = await task.save();
          return newTask;
        },
        {
          body: t.Object({
            title: t.String(),
            description: t.String(),
            status: t.String(),
            deadline: t.Date(),
          }),
        }
      )
      .post(
        "/edit/:id",
        async ({ params, body: { title, description, status } }) => {
          try {
            await Task.findOneAndUpdate(
              { _id: params.id },
              {
                $set: {
                  title: title,
                  description: description,
                  status: status,
                },
              }
            );
            return "Success!";
          } catch (error) {
            console.log(error);
            return error;
          }
        },
        {
          params: t.Object({
            id: t.String(),
          }),
          body: t.Object({
            title: t.String(),
            description: t.String(),
            status: t.String(),
          }),
        }
      )
      .get(
        "/delete/:id",
        async ({ params }) => {
          try {
            await Task.findOneAndDelete({ _id: params.id });
            return "Success!";
          } catch (error) {
            console.log(error);
            return error;
          }
        },
        {
          params: t.Object({
            id: t.String(),
          }),
        }
      )
  );
}

export default route;
