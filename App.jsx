import { useState } from 'react'
{/* import reactLogo from './assets/react.svg' */ }
import '/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header class="fixed inset-x-0 top-0 block bg-button-text bg-opacity-50">
        <marquee class="m-0 bg-amber-100 py-px px-0 text-button-text">
          {/* for marquee */}
          Hello World! Start
          <a
            href="https://bernhardhustomo.com"
            class="pointer-events-auto no-underline"
          > here</a>
        </marquee>
        <div class="mx-3 my-0 flex justify-between">
          {/* for top navigation */}
          <div class="flex items-center">
            {/* for logo on top left */}
            <a href="/">
              <img
                class="h-8"
                src={require('./assets/images/antoinelle-logo-beige.png')}
                alt="antoinelle"
              />
            </a>
          </div>
          <div class="flex items-center p-px">
            {/* for top right navigation */}
            <div class="flex items-center px-2">
              <ul class="flex list-none">
                <li class="mx-1 flex items-center">
                  <a href="/">
                    <img
                      class="w-8"
                      src="/assets/images/nav-yinyang-light.svg"
                      alt="Toggle to Dark Mode or Bright Mode"
                    />
                  </a>
                </li>
                <li class="mx-1 flex items-center">
                  <a href="/">
                    <img
                      class="w-8"
                      src="/assets/images/nav-mobile-version-light.svg"
                      alt="Toggle to Mobile Version"
                    />
                  </a>
                </li>
                <li class="mx-1 flex items-center">
                  <a href="/">
                    <img
                      class="w-8"
                      src="/assets/images/nav-desktop-version-light.svg"
                      alt="Toggle to Desktop Version"
                    />
                  </a>
                </li>
                <li class="mx-1 flex items-center">
                  <a href="/">
                    <img
                      class="w-8"
                      src="/assets/images/nav-account-light.svg"
                      alt="Account Icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="link:text-beige mx-1 flex h-full items-center px-2 visited:text-button-text hover:bg-button-text"
            >
              <a
                href="/"
                class="uppercase no-underline visited:text-beige hover:bg-button-text active:text-beige"
              >sign in</a>
            </div>
          </div>
        </div>
      </header>

      <main class="flex justify-center">
        <div class="flex w-10/12 flex-col items-center">
          <div
            class="h-screen w-screen bg-gradient-to-r from-zinc-400 to-zinc-500"
          >
            <img
              src="/assets/images/hero.jpg"
              alt="antoinelle-hero"
              class="h-full w-full object-cover mix-blend-soft-light"
            />
            <div class="absolute bottom-32 left-0 p-24">
              <h1 class="text-6xl font-thin tracking-wider text-beige">
                BESPOKE STATIONERIES
              </h1>
              <h2 class="text-3xl font-thin tracking-wider text-beige">
                add a touch of personalities into your wedding details with our
                thoughtfully crafted custom-made stationeries
              </h2>
              <div class="flex border-solid border-x-red-600 border-opacity-50">
                {/* for the three buttons */}
                <div class="ml-0 mr-16">
                  <a href="https://google.com">
                    <button
                      class="my-0 rounded-6xl border-transparent p-1 px-4 shadow-button-shadow"
                    >
                      <div class="flex items-center">
                        <span
                          class="mr-2 font-eaves text-lg italic text-button-text"
                        >
                          see our previous works
                        </span>
                        <img
                          src="assets/images/button-arrow-circle-up-right.svg"
                          alt="see previous works"
                          class="h-8"
                        />
                      </div>
                    </button>
                  </a>
                </div>
                <div class="ml-0 mr-16">
                  <a href="https://yahoo.com">
                    <button
                      class="my-0 rounded-6xl border-transparent p-1 px-4 shadow-button-shadow"
                      type="button"
                    >
                      <div class="flex items-center">
                        <span
                          class="mr-2 font-eaves text-lg italic text-button-text"
                        >chat with us</span><img
                          src="assets/images/button-chat-teardrop.svg"
                          alt="see previous works"
                          class="h-8"
                        />
                      </div>
                    </button>
                  </a>
                </div>
                <div class="ml-0 mr-16">
                  <a href="https://web.telegram.org">
                    <button
                      class="my-0 rounded-6xl border-transparent p-1 px-4 shadow-button-shadow"
                    >
                      <div class="flex items-center">
                        <span
                          class="mr-2 font-eaves text-lg italic text-button-text"
                        >F A Q</span><img
                          src="assets/images/button-question.svg"
                          alt="FAQ"
                          class="h-8"
                        />
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="block border-2 border-dashed border-violet-300 text-button-text"
          >
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
          </div>
        </div>
      </main>
      <footer class=""></footer>
      <nav class=""></nav>
    </div>
  )
}

export default App
