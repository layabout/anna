package com.mobaopay.portal.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by ruby on 2016/7/6.
 * Email:liyufeng_23@163.com
 */
@Controller
public class ProductController {
    @RequestMapping(value = {"/products"})
    public String products() {
        return "products";
    }
}
