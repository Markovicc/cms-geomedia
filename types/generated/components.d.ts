import type { Schema, Attribute } from '@strapi/strapi';

export interface TestimonialsItemsTestimonialsItem extends Schema.Component {
  collectionName: 'components_testimonials_items_testimonials_items';
  info: {
    displayName: 'testimonials-item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'>;
  };
}

export interface SocialListsSocialList extends Schema.Component {
  collectionName: 'components_social_lists_social_lists';
  info: {
    displayName: 'social-list';
    icon: 'arrowRight';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

export interface ScientistBoxesScientistBox extends Schema.Component {
  collectionName: 'components_scientist_boxes_scientist_boxes';
  info: {
    displayName: 'scientist-box';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    lists: Attribute.Component<'social-lists.social-list', true> &
      Attribute.Required;
  };
}

export interface ProcessBoxesProcessBox extends Schema.Component {
  collectionName: 'components_process_boxes_process_boxes';
  info: {
    displayName: 'process-box';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'>;
  };
}

export interface PostsRichText extends Schema.Component {
  collectionName: 'components_posts_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'pencil';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface PostsImageText extends Schema.Component {
  collectionName: 'components_posts_image_texts';
  info: {
    displayName: 'imageText';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
  };
}

export interface PostsIframe extends Schema.Component {
  collectionName: 'components_posts_iframes';
  info: {
    displayName: 'Iframe';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    code: Attribute.Text;
    class: Attribute.String;
    dataSrc: Attribute.String;
    script: Attribute.String;
  };
}

export interface HistoryTimelinesHistoryTimeline extends Schema.Component {
  collectionName: 'components_history_timelines_history_timelines';
  info: {
    displayName: 'history-timeline';
    icon: 'arrowRight';
  };
  attributes: {
    year: Attribute.String & Attribute.Required;
    date: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.'>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface FooterLinksFooterLink extends Schema.Component {
  collectionName: 'components_footer_links_footer_links';
  info: {
    displayName: 'footer-link';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface FeaturesListsFeaturesList extends Schema.Component {
  collectionName: 'components_features_lists_features_lists';
  info: {
    displayName: 'features-list';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    iconImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    shortDesc: Attribute.String & Attribute.Required;
  };
}

export interface FaqAccordionsFaqAccordion extends Schema.Component {
  collectionName: 'components_faq_accordions_faq_accordions';
  info: {
    displayName: 'faq-accordion';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'>;
  };
}

export interface FaqAccordionTabsFaqAccordionTab extends Schema.Component {
  collectionName: 'components_faq_accordion_tabs_faq_accordion_tabs';
  info: {
    displayName: 'faq-accordion-tab';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    accordions: Attribute.Component<'faq-accordions.faq-accordion', true> &
      Attribute.Required;
  };
}

export interface CaseStudyItemsCaseStudyItem extends Schema.Component {
  collectionName: 'components_case_study_items_case_study_items';
  info: {
    displayName: 'case-study-item';
    icon: 'arrowRight';
  };
  attributes: {
    subTitle: Attribute.String & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'>;
    descriptionTwo: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/case-studies-details-one'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Details More'>;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testimonials-items.testimonials-item': TestimonialsItemsTestimonialsItem;
      'social-lists.social-list': SocialListsSocialList;
      'seo.seo-information': SeoSeoInformation;
      'scientist-boxes.scientist-box': ScientistBoxesScientistBox;
      'process-boxes.process-box': ProcessBoxesProcessBox;
      'posts.rich-text': PostsRichText;
      'posts.image-text': PostsImageText;
      'posts.iframe': PostsIframe;
      'history-timelines.history-timeline': HistoryTimelinesHistoryTimeline;
      'footer-links.footer-link': FooterLinksFooterLink;
      'features-lists.features-list': FeaturesListsFeaturesList;
      'faq-accordions.faq-accordion': FaqAccordionsFaqAccordion;
      'faq-accordion-tabs.faq-accordion-tab': FaqAccordionTabsFaqAccordionTab;
      'case-study-items.case-study-item': CaseStudyItemsCaseStudyItem;
    }
  }
}
