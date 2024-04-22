export const PRODUCTS = {
  categories: [
    {
      name: "women",
      subcategories: [
        {
          name: "blazers",
          products: [
            {
              id: "1",
              name: "Relaxed Ruched Sleeve Blazer",
              description:
                "Made from a soft handle fabric, this relaxed blazer features ruched sleeves, mock welt pockets on the front and seam detail for shaping. This blazer offers a relaxed fit while still looking smart. Simply throw on over jeans and a t-shirt, or dress up with trousers and a pair of heels.",
              features: [
                "Relaxed fit",
                "Fully lined",
                "Soft handle fabric",
                "Mock pockets",
              ],
              measurements: {
                regular: 'Regular centre back neck to hem 27.5" / 70cm.',
              },
              washingInstruction: "Machine washable.",
              composition: {
                main: "100% Recycled polyester",
                lining: "100% Recycled polyester",
              },
              images: {
                orange: [
                  "https://postimg.cc/sBsmQmKv",
                  "https://postimg.cc/xXx8MT3M",
                  "https://postimg.cc/FfwKCWqK",
                  "https://postimg.cc/f3VLKn8F",
                  "https://postimg.cc/fSNRD3Mn",
                  "https://postimg.cc/hzxtk8W1",
                ],
                pink: [
                  "https://postimg.cc/rRkZjTNN",
                  "https://postimg.cc/JyS2yZyg",
                  "https://postimg.cc/5HXrNntL",
                  "https://postimg.cc/GTx7SfMw",
                  "https://postimg.cc/0MmH7jDN",
                  "https://postimg.cc/14MDJ6PN",
                ],
                purple: [
                  "https://postimg.cc/Yj2drtCY",
                  "https://postimg.cc/7G9X3Wm5",
                  "https://postimg.cc/zHf70Fc0",
                  "https://postimg.cc/87vHK5ZQ",
                  "https://postimg.cc/8j94mWBm",
                  "https://postimg.cc/Wt9XtxdK",
                  "https://postimg.cc/Vdd4t4MN",
                  "https://postimg.cc/1gcKSdxv",
                ],
              },
              price: 44,
              sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
            },
            // More products within this subcategory can be added here
          ],
        },
        // More subcategories for women can be added here
      ],
    },
    // More categories such as men, child, holiday, etc. can be added here
  ],
};
