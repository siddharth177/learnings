import 'package:flutter/material.dart';
import 'package:flutter_projects/text_widget.dart';

final Alignment startAlignment =
    Alignment.topRight; // value never changes again
const Alignment endAlignment = Alignment
    .topLeft; // we can't resign the variable and get locked in during the code is compiled

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: const [Colors.yellow, Colors.red],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: const Center(child: TextWidget()),
    );
  }
}
