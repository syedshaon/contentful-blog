import { createClient } from "contentful";
import RecipeCard from "@/components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
      revalidate: 1,
    },
  };
}

export default function Recipes({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}


Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum expedita voluptatem ut nesciunt nobis in ex qui, fugiat sunt rem modi, illo voluptatum porro recusandae error at quod sint, pariatur alias. Alias officia reprehenderit dolore in incidunt optio. Iure, minima necessitatibus deleniti dolorum sint atque reprehenderit. Laborum error, corrupti dignissimos nesciunt iste ipsam ex labore id, eligendi eius voluptates alias nisi hic, quas excepturi facilis suscipit. In perferendis unde modi eveniet, iste cupiditate sed ipsum? Perferendis obcaecati quod minus et aliquid nemo cupiditate quam dolorum nesciunt illum aperiam, nisi nobis laboriosam temporibus labore vero debitis error! Ipsum mollitia asperiores, provident tenetur doloremque veritatis maxime cum odio cupiditate alias numquam eveniet iste adipisci atque enim sit voluptatum unde suscipit fugit ullam exercitationem earum, facere voluptate minima. Expedita, illum, dignissimos culpa sit eos sint dolorem error facere fugiat ut reprehenderit. Nobis minus cupiditate atque possimus ea. Ad explicabo voluptatum ut voluptatibus. Corrupti animi magnam quis voluptas quisquam libero assumenda molestias, sint, perferendis fugit vitae sequi distinctio cum error ducimus quae maiores impedit? Eaque et obcaecati enim facere magni voluptatem earum at asperiores corporis. Voluptatibus culpa minima ad voluptas ea ipsa, placeat error quas nisi nostrum quibusdam officiis labore aperiam quasi harum quo incidunt, reprehenderit natus. Eum quae exercitationem tenetur, praesentium facilis adipisci nostrum sunt animi doloribus assumenda dignissimos ab nisi quidem nesciunt labore veritatis consectetur non. Nihil quod ratione molestiae temporibus, sequi voluptates, animi quisquam nobis ex, ad architecto et sint maxime eum sapiente blanditiis. Harum ab, pariatur voluptas dolor culpa voluptates ducimus? Facilis omnis vero impedit iusto natus rerum eaque laboriosam ad porro sapiente doloremque quos dignissimos nam quisquam in similique, provident assumenda magni iste sed aliquam ipsum explicabo voluptatum! Itaque inventore rem neque cumque? Illo, nulla quod? Explicabo quod placeat quidem aliquam facere nulla laboriosam itaque aspernatur laudantium ex eos minus facilis, distinctio quis culpa totam. Repellat, illo. Animi veniam tempore reiciendis deserunt, distinctio dicta est rerum numquam omnis corporis. Quae nemo nihil pariatur facere quibusdam deserunt libero omnis dicta, maxime veritatis? Obcaecati quaerat totam ex dolor unde et minima, sunt, ad doloremque cupiditate repellat vel repellendus, molestiae alias suscipit debitis optio repudiandae dolore quasi tempore accusamus modi quam incidunt. Autem aut quod corrupti laborum quam deleniti maiores fuga possimus facere dolores perspiciatis maxime quisquam delectus impedit ipsam, temporibus omnis quae eius, molestias quaerat sequi quibusdam, nostrum quia. Quibusdam atque rem, sequi expedita voluptatibus magnam amet, libero consequatur omnis ad, dolorum cum. Amet magnam eius distinctio, a commodi, deleniti dicta et sint corrupti asperiores, dignissimos natus. Dicta aliquid iure velit eveniet, et eius error itaque ullam cum impedit quis perspiciatis est voluptates nemo vel tempora nesciunt quidem debitis. Inventore aperiam optio ea aliquam id? Magni rerum facilis pariatur nihil illo voluptates soluta, ex nulla cupiditate mollitia iure labore quos atque non aliquam totam at, necessitatibus quas. Pariatur totam quos recusandae distinctio nemo, quasi corrupti minima id quo molestiae hic, rem laborum tempora dolorem repellendus vero ad nulla magnam repellat perferendis minus sunt labore quisquam dolorum. Voluptatem quia possimus maxime?