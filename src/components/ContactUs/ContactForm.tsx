import * as Form from "@radix-ui/react-form";

export const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="mx-auto mb-16 mt-10 w-full md:w-3/5">
      <Form.Root onSubmit={handleSubmit}>
        <Form.Field name="Name">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control asChild>
            <input
              className="input input-bordered w-full"
              type="text"
              name="name"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="Email">
          <Form.Label className="label">Email</Form.Label>
          <Form.Message
            className="label-text-alt text-error"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="label-text-alt text-error"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
          <Form.Control asChild>
            <input
              className="input input-bordered w-full"
              type="email"
              name="email"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="Phone">
          <Form.Label className="label">Contact Number</Form.Label>
          <Form.Control asChild>
            <input
              className="input input-bordered w-full"
              type="text"
              name="phone"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="Interest">
          <Form.Label className="label">Tour Interest</Form.Label>
          <Form.Control asChild>
            <select className="select select-bordered w-full" name="interest">
              <option value="Culture & Nature">Culture & Nature</option>
              <option value="Trekking & Walking">Trekking & Walking</option>
              <option value="Wildlife Watching">Wildlife Watching</option>
              <option value="Birding">Birding</option>
              <option value="History & Archaeology">
                History & Archaeology
              </option>
              <option value="Cycling">Cycling</option>
              <option value="The Lost City">The Lost City</option>
              <option value="Family Holidays">Family Holidays</option>
              <option value="Educational Tourism">Educational Tourism</option>
            </select>
          </Form.Control>
        </Form.Field>

        <Form.Field name="Message">
          <Form.Label className="label">Message</Form.Label>
          <Form.Message
            className="label-text-alt text-error"
            match="valueMissing"
          >
            Please enter a message
          </Form.Message>
          <Form.Control asChild>
            <textarea
              className="textarea textarea-bordered w-full"
              name="Message"
              required
            ></textarea>
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button className="btn btn-primary mt-2 w-full text-lg text-accent">
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
