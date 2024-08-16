/**
 * tag controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::tag.tag', ({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::tag.tag').findOne({
            where: { slug: id },
            populate: ['posts']
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
        return this.transformResponse(sanitizedEntity);
    }
  }));
  