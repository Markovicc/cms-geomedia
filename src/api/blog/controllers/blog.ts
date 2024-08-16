/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({

  // Method 3: Replacing a core action
  async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query('api::blog.blog').findOne({
          where: { slug: id },
          populate: ['image', 'authorImage']
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
  }
}));
