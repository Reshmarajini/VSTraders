import emailjs from 'emailjs-com';

export async function POST(req) {
  const { name, email, message, type } = await req.json();

  const templateParams = {
    name,
    email,
    message,
    to_email: type === 'BUY' ? 'buy@example.com' : 'sell@example.com',
  };

  try {
    // Send the email using EmailJS
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    );

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email', error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
