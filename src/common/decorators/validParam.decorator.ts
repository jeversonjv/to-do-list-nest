import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Types } from "mongoose";

export const validParam = createParamDecorator(
    (prop: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const response = ctx.switchToHttp().getResponse();

        const id = request.params[prop];
        if (Types.ObjectId.isValid(id)) return id;

        response.status(400).json({ error: `${prop} is not valid` });
    }
);