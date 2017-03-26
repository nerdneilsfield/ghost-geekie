/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Dengqi <dengqi@shanghaitech.edu.cn>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/03/26 06:08:56 by Dengqi            #+#    #+#             */
/*   Updated: 2017/03/26 06:08:56 by Dengqi           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

$("#title-delay").delay("200").fadeIn(600);
$(".poster-img").delay("600").fadeIn(600);
$(".text-main ").delay("800").fadeIn(800);
$(".footer-text").delay("1000").fadeIn(400);

setTimeout(function(){
        $(".wearegeekpie").typed({
            strings: ["/*WE ARE GEEKPIE*/"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);