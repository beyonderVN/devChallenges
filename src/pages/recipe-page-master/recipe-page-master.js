import React from "react"
import image from "./photo1.png"
export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
        :root{
          --diff: calc( var(--max-size) - var(--min-size) );
          --responsive: calc( (var(--min-size) * 1px) + var(--diff) * ((100vw - 360px) / 1200) );
          --max-size: 17;
          --min-size: 15;
          font-size: var(--responsive);
        }
        .recipe-page-master{
          font-family: Montserrat
        }
        .text-primary{
          color: #F2994A;
        }
        .bg-primary{
          background: #F2994A;
        }
        .recipe-page-master_title{
          font-family: Playfair Display;
        }
        .recipe-page-master_title2{
          font-family: Playfair Display;
        }

        /* The recipe-page-master_checkbox */
        .recipe-page-master_checkbox {
          display: block;
          position: relative;
          padding-left: 2rem;
          margin-bottom: 12px;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Hide the browser's default checkbox */
        .recipe-page-master_checkbox input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 1.4rem;
          width: 1.4rem;
          box-shadow:inset 0 0 0 1px #cecece; 
          border-radius:0.3rem;
        }

        /* On mouse-over, add a grey background color */
        .recipe-page-master_checkbox:hover input ~ .checkmark {
          // background-color: #ccc;
        }

        /* When the checkbox is checked, add a blue background */
        .recipe-page-master_checkbox input:checked ~ .checkmark {
          background-color:  #F2994A;
          box-shadow:none; 
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the checkmark when checked */
        .recipe-page-master_checkbox input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the checkmark/indicator */
        .recipe-page-master_checkbox .checkmark:after {
          left: 0.6rem;
          top: 0.3rem;
          width: 0.3rem;
          height: 0.8rem;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      `}
      </style>
      <div className="p-3 py-4 grid grid-cols-12 gap-6 recipe-page-master items-start">
        <div className="col-span-12 container mx-auto space-y-3">
          <div className="text-2xl font-bold recipe-page-master_title">
            Classic Cheesecake Recipe
          </div>
          <div className="space-x-3 flex">
            <span className="text-gray-500 h-6 text-xs flex items-center">
              <svg
                width={"1em"}
                height={"1em"}
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
                <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4" />
                <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4" />
                <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4" />
                <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4" />
                <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4" />
              </svg>
            </span>
            <h1 className="max-w-md text-sm italic">
              Look no further for a creamy and ultra smooth classic cheesecake
              recipe! Paired with a buttery graham cracker crust, no one can
              deny its simple decadence. For the best results, bake in a water
              bath.
            </h1>
          </div>
        </div>
        <div className="col-span-12 container mx-auto">
          <img className="w-full object-contain" src={image}></img>
        </div>
        <div className="grid grid-cols-12 gap-6 col-span-12 container mx-auto  items-start">
          <div className="col-span-12 container mx-auto grid grid-cols-12 md:col-span-3 gap-3 gap-y-6 md:order-1 md:shadow md:p-8 md:rounded-xl md:gap-6">
            <div className="flex space-x-1 col-span-12 container mx-auto md:col-span-12 container mx-auto items-center">
              <div className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M164.852 279.939l61.834-60.251L73.72 71.706c-33.626 32.764-33.626 86.677 0 119.44l91.132 88.793z"></path>
                  <path d="M312.389 241.88c33.636 14.802 80.283 4.232 113.91-29.593 41.222-40.165 49.909-98.303 17.363-128.96-31.465-31.71-91.131-23.245-132.354 16.921-34.718 33.825-45.566 79.276-30.374 110.986-47.739 47.568-211.552 207.173-211.552 207.173L99.759 448l149.71-145.866L399.177 448l30.374-29.593-149.709-145.869 32.547-30.658z"></path>
                </svg>
              </div>
              <div>
                <div className="uppercase text-gray-500 font-semibold  leading-none text-xs">
                  Yields
                </div>
                <div className="text-xs text-primary ">
                  12 servings
                </div>
              </div>
            </div>
            <div className="flex space-x-1 col-span-4 md:col-span-12 container mx-auto items-center">
              <div className="text-lg ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                </svg>
              </div>
              <div>
                <div className="uppercase text-gray-500 font-semibold  leading-none text-xs">
                  Prep TIme
                </div>
                <div className="text-xs font-medium ">
                  45 minutes
                </div>
              </div>
            </div>
            <div className="flex space-x-1 col-span-4 md:col-span-12 container mx-auto items-center">
              <div className="text-lg ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                </svg>
              </div>
              <div>
                <div className="uppercase text-gray-500 font-semibold  leading-none text-xs">
                  Cook Time
                </div>
                <div className="text-xs font-medium ">1 hour</div>
              </div>
            </div>
            <div className="flex space-x-1 col-span-4 md:col-span-12 container mx-auto items-center">
              <div className="text-lg ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                </svg>
              </div>
              <div>
                <div className="uppercase text-gray-500 font-semibold  leading-none text-xs">
                  Total Time
                </div>
                <div className="text-xs font-medium ">
                  7,75 hours
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 container mx-auto space-y-5  md:col-span-9 ">
            <h2 className="recipe-page-master_title text-xl font-bold">
              Ingredients
            </h2>
            <h3 className="recipe-page-master_title text-lg italic">
              Graham Cracker Crust
            </h3>
            <ul>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10
                    full sheet graham crackers)
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    5 Tablespoons (70g) <b>unsalted butter</b>, melted
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    {" "}
                    1/4 cup (50g) <b>granulated sugar</b>
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
            </ul>
            <h3 className="recipe-page-master_title text-lg italic">
              Cheesecake
            </h3>
            <ul>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    four 8-ounce blocks (904g) full-fat cream cheese, softened
                    to room temperature
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>1 cup (200g) granulated sugar</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    1 cup (240g) full-fat sour cream, at room temperature
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>1 teaspoon pure vanilla extract</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    2 teaspoons fresh lemon juice (optional, but recommended)
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>3 large eggs, at room temperature</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
              <li>
                <label class="recipe-page-master_checkbox">
                  <div>
                    topping suggestions: salted caramel, lemon curd, strawberry
                    topping, chocolate ganache, red wine chocolate ganache,
                    fresh fruit, whipped cream, or raspberry sauce (recipe in
                    notes)
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
            </ul>
            <h2 className="recipe-page-master_title text-2xl font-bold">
              Instructions
            </h2>
            <ol className="space-y-4">
              <style>
              {
                `
                ol {
                  list-style: none;
                  counter-reset: my-awesome-counter;
                  display: flex;
                  flex-wrap: wrap;
                  margin: 0;
                  padding: 0;
                }
                ol li {
                  counter-increment: my-awesome-counter;
                  display: flex;
                  width: 100%;
                  margin-bottom: 0.5rem;
                  align-items: self-start;
                }
                ol li::before {
                  width: 3rem;
    height: 3rem;
    content: "0" counter(my-awesome-counter);
    font-weight: bold;
    font-size: 2rem;
    padding: 0.5rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
    font-family: Playfair Display;
    line-height: 1;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    text-align: center;
    color: white;
    background: #F2994A;
              }
                }
                `
              }
              </style>
            
              {[
                "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).",
                "Make the crust: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.",
                "Make the filling: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.",
                "Prepare the simple water bath (see note) Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)",
                "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.",
              ].map(text=><li>{text}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}
