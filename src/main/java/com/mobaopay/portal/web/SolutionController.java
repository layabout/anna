package com.mobaopay.portal.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by ruby on 2016/7/8.
 * Email:liyufeng_23@163.com
 */
@Controller
public class SolutionController {
    @RequestMapping(value = {"/solution"})
    public String solution() {
        return "solution";
    }
}
