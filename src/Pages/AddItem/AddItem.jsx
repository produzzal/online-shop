import React from "react";

const AddItem = () => {
  var showDate = new Date();
  var displayTodaysDate = showDate.getDate() + '/' + showDate.getMonth() + 1 + '/' + showDate.getFullYear();

  const handleAddClothes = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const discountPrice = form.discountPrice.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const hostEmail = form.email.value;
    const hostName = form.hostName.value;
    const picture = form.picture.value;
    const desc = form.description.value;
    console.log(name, type, price, discountPrice, quantity, desc, date, picture, hostEmail, hostName);
    // const addMovie = { name, type, price, discountPrice, quantity, desc, date, picture, hostEmail, hostName }
  }

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Item
          </h2>
          <form action="#" onSubmit={handleAddClothes}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Clothes
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type name"
                  required
                />
              </div>
              <div>
                <label
                  for="type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Type</option>
                  <option value="t-shirt">T-shirt</option>
                  <option value="shirt">Shirt</option>
                  <option value="hoddie">Hoddie</option>
                  <option value="cap">Cap</option>
                </select>
              </div>
              <div class="w-full">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Price" required="" />
              </div>
              <div>
                <label
                  for="Language"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date&Time
                </label>
                <input
                  id="date"
                  name="date"
                  value={displayTodaysDate} readOnly="true"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >

                </input>
              </div>
              <div class="w-full">
                <label for="discountPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount Price</label>
                <input type="number" name="discountPrice" id="discountPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Discount Price" required="" />
              </div>
              <div class="w-full">
                <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                <input type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Quantity" required="" />
              </div>


              {/* Host Email */}
              <div class="sm:col-span-2">
                <label
                  for="Email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Host Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"

                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Host Email "
                  required
                />
              </div>
              {/* Host Name */}
              <div class="sm:col-span-2">
                <label
                  for=""
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Host Name
                </label>
                <input
                  type="text"
                  name="hostName"
                  id="hostName"

                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Host Name "
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="picture"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  picture
                </label>
                <input
                  type="link"
                  name="picture"
                  id="picture"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Picture link "
                  required
                />
              </div>



              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#6B717A] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Product
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
