export default async (email: string): Promise<string> => {
  const leadText = "startup.security: " + email;

  try {
    if (!process.env.WEBHOOK_URL) {
      throw "No webhook URL set";
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: leadText }),
    };

    await fetch(process.env.WEBHOOK_URL, requestOptions);

    return "Success! We'll be in touch soon.";
  } catch (e) {
    console.error(e, leadText);

    return "An error occurred. Please try again";
  }
};
