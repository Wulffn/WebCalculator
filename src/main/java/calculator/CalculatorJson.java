/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculator;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.InvalidParameterException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author mwn
 */
@WebServlet(name = "CalculatorJson", urlPatterns = {"/calculatorjson"})
public class CalculatorJson extends HttpServlet {

    static Calculator calc = new Calculator();//This is the Calculator class implemented in part-1 

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/plain;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            try {
                String opp = request.getParameter("operation");
                String res = null;
                int n1 = Integer.parseInt(request.getParameter("n1"));
                int n2 = Integer.parseInt(request.getParameter("n2"));
                switch (opp) {
                    case "add":
                        res = "{\"n1\" : "+ n1 + ",\"n2\" : "+ n2 + ",\"operation\" : \"add\",\"res\" : "+ calc.add(n1, n2) + "}";
                        break;
                    case "sub":
                        res = "{\"n1\" : "+ n1 + ",\"n2\" : "+ n2 + ",\"operation\" : \"sub\",\"res\" : "+ calc.sub(n1, n2) + "}";
                        break;
                    case "mul":
                        res = "{\"n1\" : "+ n1 + ",\"n2\" : "+ n2 + ",\"operation\" : \"mul\",\"res\" : "+ calc.mul(n1, n2) + "}";
                        break;
                    case "div":
                        res = "{\"n1\" : "+ n1 + ",\"n2\" : "+ n2 + ",\"operation\" : \"div\",\"res\" : "+ calc.div(n1, n2) + "}";
                        break;
                    default:
                        throw new InvalidParameterException("Operation not supported");
                }
                out.println(res);
            } catch (Exception e) {
                response.setStatus(400);
                out.println("ERROR, illegal inputs" + e.getMessage());
            }
        }
    }
}
