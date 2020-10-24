import { shallowMount } from '@vue/test-utils';

import Articles from '@/components/Articles.vue';
import Title from '@/components/Title.vue';
import Article from '@/components/Article.vue';

describe('Articles', () => {
  const articles = {
    bundelItems: [{ id: 1 }, { id: 2 }],
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Articles, {
      propsData: { articles },
    });
  });

  it('should render articles title', () => {
    expect(wrapper.findComponent(<Title articles={articles} />)).toBeTruthy();
  });

  it('should render two articles', () => {
    const components = wrapper.findAllComponents(Article);

    expect(components).toHaveLength(2);
    expect(components[0].props()).toEqual({ article: articles.bundelItems[0] });
    expect(components[1].props()).toEqual({ article: articles.bundelItems[1] });
  });
});
