import { mount } from '@vue/test-utils';
import Title from '@/components/Title.vue';

describe('Title', () => {
  const articles = {
    label: 'some label',
    title: 'some title',
    description: 'some description',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Title, {
      propsData: { articles },
    });
  });

  it('should render articles label', () => {
    expect(wrapper.html()).toContain('some label');
  });

  it('should render articles title', () => {
    expect(wrapper.html()).toContain('some title');
  });

  it('should render articles description', () => {
    expect(wrapper.html()).toContain('some description');
  });
});
