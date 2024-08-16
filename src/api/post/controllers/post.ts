/**
 * post controller
 */

import { factories } from '@strapi/strapi'




export default factories.createCoreController('api::post.post', ({ strapi }) => ({

  // Method 3: Replacing a core action
  async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query('api::post.post').findOne({
          where: { slug: id },
          populate: ['image', 'author', 'tags', 'iframeZone', 'seo']
         
         
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
  }
}));
