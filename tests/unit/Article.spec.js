import { mount } from '@vue/test-utils';
import Article from '@/components/Article.vue';

describe('Article', () => {
  const article = {
    id: 123,
    urlAlias: 'some url',
    afbeelding: { afbeelding: 'some image' },
    chapeau: 'some heading',
    titel: 'some title',
    lead: 'some introduction',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Article, {
      propsData: { article },
    });
  });

  it('should render an article url', () => {
    expect(wrapper.findComponent({ href: 'some url' })).toBeTruthy();
  });

  it('should render an article image', () => {
    expect(wrapper.findComponent({ src: 'some image' })).toBeTruthy();
  });

  it('should render an article heading', () => {
    expect(wrapper.html()).toContain('some heading');
  });

  it('should render an article title', () => {
    expect(wrapper.html()).toContain('some title');
  });

  it('should render an article introduction', () => {
    expect(wrapper.html()).toContain('some introduction');
  });
});
