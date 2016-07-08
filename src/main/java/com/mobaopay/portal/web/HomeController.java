package com.mobaopay.portal.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by ruby on 2016/6/20.
 * Email:liyufeng_23@163.com
 */
@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/index", "/home"})
    public String home() {
        return "index";
    }
}
