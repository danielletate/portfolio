<template>
  <section class="bg-stone-100">
    <div class="py-20 md:py-16 px-6 mx-auto max-w-screen-md">
      <h1 class="text-4xl text-black uppercase text-center">Contact Me</h1>
      <p class="text-center text-stone-600 mt-4 mb-8">
        Want to collaborate on a project or have a question?
      </p>
      <form
        action="https://formsubmit.co/danielle.tate825@gmail.com"
        method="POST"
        class="space-y-8"
      >
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Your name</label
          >
          <input
            type="name"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="First and last name"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Your message</label
          >
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300"
            placeholder="Please type your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 uppercase text-sm font-medium text-center text-white rounded-md bg-stone-500 sm:w-fit transition duration-300 hover:bg-stone-400 focus:outline-none"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>
