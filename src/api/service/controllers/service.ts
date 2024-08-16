/**
 * service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::service.service', ({ strapi }) => ({

  // Method 3: Replacing a core action
  async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query('api::service.service').findOne({
          where: { slug: id },
          populate: ['iconImage', 'detailsImage']
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
  }
}));
