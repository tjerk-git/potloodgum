export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const email = data.get('email');
    const message = data.get('message');

    const formData = {
      email: email,
      message: message,
    };


  },
};

