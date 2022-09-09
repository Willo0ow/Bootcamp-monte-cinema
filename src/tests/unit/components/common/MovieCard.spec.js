import MovieCard from "@components/common/MovieCard.vue";
import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

const createComponent = () => {
  return mount(MovieCard, {
    props: {
      movie: {
        id: 2,
        title: "You've got Mail",
        genre: { id: 5, name: "Romance" },
        poster_url: "https://miro.medium.com/max/520/0*JeA6QiQ6BzuNzKHP.jpg",
        length: "2h 00min",
      },
      to: { name: "MovieDetails", params: { id: 1 } },
    },
  });
};
const findCardTitle = (wrapper) => wrapper.find('[data-spec="card-title"]');
const findCardSubtitle = (wrapper) =>
  wrapper.find('[data-spec="card-subtitle"]');
const findCardImage = (wrapper) => wrapper.find('[data-spec="card__image"]');
const findCardTag = (wrapper) => wrapper.find('[data-spec="chip"]');
const findCard = (wrapper) => wrapper.find('[data-spec="movie-card"]');

describe("MovieCard", () => {
  it("Displays movie information based on movie object in props", () => {
    const wrapper = createComponent();
    const cardTitle = findCardTitle(wrapper);
    const cardSubtitle = findCardSubtitle(wrapper);
    const cardImage = findCardImage(wrapper);
    const cardTag = findCardTag(wrapper);

    expect(cardTitle.text()).toMatch("You've got Mail");
    expect(cardSubtitle.text()).toMatch("2h 00min");
    expect(cardImage.attributes("src")).toMatch(
      "https://miro.medium.com/max/520/0*JeA6QiQ6BzuNzKHP.jpg"
    );
    expect(cardTag.text()).toMatch("Romance");
  });
  it("is a router-link if the to prop is passed", () => {
    const wrapper = createComponent();
    const card = findCard(wrapper);
    expect(card.wrapperElement.tagName).toMatch("ROUTER-LINK");
  });
});
