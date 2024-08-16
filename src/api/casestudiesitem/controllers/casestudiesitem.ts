/**
 * casestudiesitem controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::casestudiesitem.casestudiesitem', ({ strapi }) => ({

  // Method 3: Replacing a core action
  async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query('api::casestudiesitem.casestudiesitem').findOne({
          where: { slug: id },
          populate: ['image']
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
  }
}));
