import 'package:flutter/material.dart';

final Alignment startAlignment =
    Alignment.topRight; // value never changes again
const Alignment endAlignment = Alignment
    .topLeft; // we can't resign the variable and get locked in during the code is compiled

class GradientContainer extends StatelessWidget {
  const GradientContainer(this.colors, {super.key});

  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: colors,
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Image.asset('assets/dice_images/dice-1.png', width: 200),
            const SizedBox(
              height: 20,
            ),
            TextButton(
              onPressed: rollDice(),
              style: TextButton.styleFrom(
                  // padding: EdgeInsets.only(top: 20),
                  foregroundColor: Colors.white,
                  textStyle: const TextStyle(fontSize: 28)),
              child: const Text('Roll The Dice!'),
            )
          ],
        ),
      ),
    );
  }
}

rollDice() {}
