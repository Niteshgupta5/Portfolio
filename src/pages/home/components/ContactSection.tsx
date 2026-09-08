import { useState } from 'react';
import { contactInfo } from '@/mocks/contact';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [formError, setFormError] = useState('');
  // const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const onHCaptchaChange = (token: string) => {
  //   setCaptchaToken(token);
  //   setFormStatus('idle');
  //   setFormError('');
  // };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setFormStatus('idle');
    setFormError('');

    const form = e.currentTarget;

    // Check hCaptcha
    // if (!captchaToken) {
    //   setFormStatus('error');
    //   setFormError('Please complete the CAPTCHA.');
    //   return;
    // }

    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get('phone_alt');

    if (
      typeof honeypot === 'string' &&
      honeypot.trim() !== ''
    ) {
      // Don't tell bots that they were detected
      setFormStatus('success');
      form.reset();
      // setCaptchaToken(null);
      return;
    }

    // Remove honeypot from submitted data
    formData.delete('phone_alt');

    // Add hCaptcha token
    // formData.set('h-captcha-response', captchaToken);

    try {
      setIsSubmitting(true);

      const response = await fetch(
        import.meta.env.VITE_FORM_SUBMISSION_URL,
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setFormError('');

        form.reset();
        // setCaptchaToken(null);
      } else {
        setFormStatus('error');
        setFormError(
          result.message ||
            'Something went wrong. Please try again.'
        );

        // Reset CAPTCHA after failed submission
        // setCaptchaToken(null);
      }
    } catch {
      setFormStatus('error');
      setFormError(
        'Network error. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-background-900/50"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Get In Touch
            </p>

            <h2 className="section-title mb-4">
              Let&apos;s{' '}
              <span className="gradient-text">
                Connect
              </span>
            </h2>

            <p className="section-subtitle mx-auto">
              Have a project in mind or want to collaborate?
              I would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">

            {/* Contact Information */}
            <div className="scroll-animate scroll-animate-delay-1 lg:col-span-2 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-400/20">

                <h3 className="font-heading text-xl font-semibold text-foreground-950 mb-2">
                  Let&apos;s Talk
                </h3>

                <p className="text-sm text-foreground-600 mb-6">
                  Have an idea or a question? Send me a message —
                  I would love to hear from you.
                </p>

                <div className="space-y-4">

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-background-800/60 flex items-center justify-center">
                      <i className="ri-mail-line text-primary-400" />
                    </div>

                    <div>
                      <p className="text-xs text-foreground-600 uppercase tracking-wider">
                        Email
                      </p>

                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-medium text-foreground-950 hover:text-primary-400 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-background-800/60 flex items-center justify-center">
                      <i className="ri-phone-line text-primary-400" />
                    </div>

                    <div>
                      <p className="text-xs text-foreground-600 uppercase tracking-wider">
                        Phone
                      </p>

                      <a
                        href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                        className="text-sm font-medium text-foreground-950 hover:text-primary-400 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-background-800/60 flex items-center justify-center">
                      <i className="ri-map-pin-line text-primary-400" />
                    </div>

                    <div>
                      <p className="text-xs text-foreground-600 uppercase tracking-wider">
                        Location
                      </p>

                      <p className="text-sm font-medium text-foreground-950">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-8">

                  <a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                    aria-label="GitHub"
                  >
                    <i className="ri-github-fill text-xl" />
                  </a>

                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                    aria-label="LinkedIn"
                  >
                    <i className="ri-linkedin-fill text-xl" />
                  </a>

                  <a
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                    aria-label="Twitter"
                  >
                    <i className="ri-twitter-fill text-xl" />
                  </a>

                  <a
                    href={contactInfo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                    aria-label="Whatsapp"
                  >
                    <i className="ri-whatsapp-fill text-xl" />
                  </a>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-animate scroll-animate-delay-2 lg:col-span-3">

              <div className="glass-card rounded-2xl p-6 md:p-8">

                <h3 className="font-heading text-xl font-semibold text-foreground-950 mb-6">
                  Send a Message
                </h3>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-secondary-500/10 border border-secondary-400/30 text-secondary-400 text-sm">
                    <i className="ri-check-line mr-2" />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && formError && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-400 text-sm">
                    <i className="ri-error-warning-line mr-2" />
                    {formError}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  action={import.meta.env.VITE_FORM_SUBMISSION_URL}
                  method="POST"
                  className="space-y-5"
                >

                  {/* Web3Forms Access Key */}
                  <input
                    type="hidden"
                    name="access_key"
                    value={
                      import.meta.env
                        .VITE_WEB3FORMS_ACCESS_KEY
                    }
                  />

                  {/* Optional Web3Forms Subject */}
                  <input
                    type="hidden"
                    name="from_name"
                    value="Portfolio Contact Form"
                  />

                  {/* Honeypot */}
                  <div className="hp-field">
                    <label htmlFor="phone_alt">
                      Leave this field empty
                    </label>

                    <input
                      id="phone_alt"
                      type="text"
                      name="phone_alt"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground-700 mb-2"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl bg-background-800/60 border border-background-700/50 text-foreground-950 placeholder-foreground-600/50 text-sm focus:outline-none focus:border-primary-400/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground-700 mb-2"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl bg-background-800/60 border border-background-700/50 text-foreground-950 placeholder-foreground-600/50 text-sm focus:outline-none focus:border-primary-400/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground-700 mb-2"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background-800/60 border border-background-700/50 text-foreground-950 placeholder-foreground-600/50 text-sm focus:outline-none focus:border-primary-400/50 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground-700 mb-2"
                    >
                      How can I help you?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 rounded-xl bg-background-800/60 border border-background-700/50 text-foreground-950 placeholder-foreground-600/50 text-sm focus:outline-none focus:border-primary-400/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />

                    <p className="text-xs text-foreground-600 mt-1 text-right">
                      Max 500 characters
                    </p>
                  </div>

                  {/* hCaptcha */}
                  {/* <HCaptcha
                    sitekey={
                      import.meta.env
                        .VITE_WEB3FORMS_ACCESS_KEY
                    }
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                    onExpire={() => {
                      setCaptchaToken(null);
                    }}
                    onError={() => {
                      setCaptchaToken(null);
                      setFormStatus('error');
                      setFormError(
                        'CAPTCHA error. Please try again.'
                      );
                    }}
                  /> */}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-primary-500 text-background-950 rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden border border-background-700/30">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223873.7906549931!2d75.69903738855072!3d22.72388828988633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1788417479163!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}